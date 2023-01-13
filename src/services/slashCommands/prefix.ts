import { CommandInteraction } from 'discord.js';
import { format             } from 'format';
import { ServerType         } from '../../helpers/types';
import sentences              from "../../languages";
import Server                 from "../../models/server";

// Change bot's prefix for message commands
export const prefix = async (command: CommandInteraction, {
  id, lang, prefix: oldPrefix
}: ServerType): Promise<String> => {
  if (!command.memberPermissions.has("ViewAuditLog", true))
    return sentences[lang].ERROR_INSUFFICIENT_PERMISSIONS;
  const isSeparated = !!(command.options.get("separated")?.value as boolean);
  const prefix      = `${command.options.get("prefix").value}${isSeparated ? ' ' : ''}`;
  if (prefix === oldPrefix)
    return sentences[lang].ERROR_ALREADY_CURRENT_LANGUAGE;
  const { prefix: new_prefix } = await Server.findOneAndUpdate({ id }, { prefix }, { new: true });
  return format(sentences[lang].SUCCESS_PREFIX_CHANGED, new_prefix, `${new_prefix}help`);
}
