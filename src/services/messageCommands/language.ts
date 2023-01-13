import { Message    } from 'discord.js';
import { format     } from 'format';
import { readdir    } from 'fs/promises';
import { ServerType } from "../../helpers/types";
import sentences      from "../../languages";
import Server         from "../../models/server";

const getAvailableLanguages = async (): Promise<string[]> => (
  (await readdir("./src/languages/"))
    ?.filter(fileName => fileName.endsWith(".json"))
    ?.map(fileName => fileName.substring(0, fileName.length - ".json".length).toLowerCase())
);

// Change bot's language
export const language = async (message: Message, line: string[], {
  id, prefix, lang
}: ServerType): Promise<Message> => {
  if (line.length !== 2)
    // FIXME: handle baseCommand (lang) and make arguments (fr, en-GB, etc...) dynamics (getAvailableLanguages)
    return message.channel.send(format(sentences[lang].ERROR_INSUFFICIENT_ARGUMENT, `${prefix}lang ['fr'|'en-GB']`));
  const language = line[1].epur();
  if (!message.member.permissions.has("ViewAuditLog", true))
    return message.channel.send(sentences[lang].ERROR_INSUFFICIENT_PERMISSIONS);
  const lang_available = await getAvailableLanguages();
  if (!lang_available.includes(language))
    return message.channel.send(sentences[lang].ERROR_UNSUPORTED_LANGUAGE);
  if (lang === language)
    message.channel.send(sentences[lang].ERROR_ALREADY_CURRENT_LANGUAGE);
  else {
    const [ base, locale   ] = language.split('-');
    const { lang: new_lang } = await Server.findOneAndUpdate({ id }, {
      lang: `${base}${locale ? `-${locale.toUpperCase()}` : ''}`
    }, {
      new: true
    });
    message.channel.send(format(sentences[new_lang].SUCCESS_LANGUAGE_CHANGED, new_lang));
  }
}
