import { CommandInteraction } from 'discord.js';
import { format             } from 'format';
import sentences              from "../../languages";
import Server                 from "../../models/server";

// Change bot's language
export const language = async (command: CommandInteraction, config: any): Promise<String> => {
  if (!command.memberPermissions.has("ViewAuditLog", true))
    return sentences[config.lang].ERROR_INSUFFICIENT_PERMISSIONS;
  const language = command.options.get("tongue").value as string;
  if (config.lang === language)
    return sentences[config.lang].ERROR_ALREADY_CURRENT_LANGUAGE;
  const { lang } = await Server.findOneAndUpdate({ id: config.id }, { lang: language }, { new: true });
  return format(sentences[lang].SUCCESS_LANGUAGE_CHANGED, language);
}
