import { Message } from 'discord.js';
import { format  } from 'format';
import { readdir } from 'fs/promises';
import sentences   from "../../languages";
import Server      from "../../models/server";

const getAvailableLanguages = async (): Promise<string[]> => (
  (await readdir("./src/languages/"))
    ?.filter(fileName => fileName.endsWith(".json"))
    ?.map(fileName => fileName.substring(0, fileName.length - ".json".length).toLowerCase())
);

// Change bot's language
export const lang = async (message: Message, line: string[], config: any): Promise<Message> => {
  console.log(config);
  if (line.length !== 2)
    return message.channel.send(format(sentences[config.lang].ERROR_INSUFFICIENT_ARGUMENT, `${config.prefix}lang ['fr-FR'|'en-GB']`));
  const language = line[1].epur();
  if (!message.member.permissions.has("ViewAuditLog", true))
    return message.channel.send(sentences[config.lang].ERROR_INSUFFICIENT_PERMISSIONS);
  const lang_available = await getAvailableLanguages();
  if (!lang_available.includes(language))
    return message.channel.send(sentences[config.lang].ERROR_UNSUPORTED_LANGUAGE);
  if (config.lang === language)
    message.channel.send(sentences[config.lang].ERROR_ALREADY_CURRENT_LANGUAGE);
  else {
    const [ base, locale ] = language.split('-');
    const { lang } = await Server.findOneAndUpdate({ id: config.id}, {
      lang: `${base}-${locale.toUpperCase()}`
    }, {
      new: true
    });
    message.channel.send(format(sentences[lang].SUCCESS_LANGUAGE_CHANGED, `${base}-${locale.toUpperCase()}`));
  }
}
