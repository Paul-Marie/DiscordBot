import Server         from "../../models/server";
import sentences      from "../../languages";
import { ServerType } from "../../helpers/types";
import { Message    } from 'discord.js';
import { format     } from 'format';

// Change discord' server prefix
export const prefix = async (message: Message, line: string[], { lang, prefix, id }: ServerType): Promise<Message> => {
  if (line.length !== 2)
    return message.channel.send(format(sentences[lang].ERROR_INSUFFICIENT_ARGUMENT, `${prefix}prefix [new_prefix]`));
  const new_prefix = line[1].epur().length >= 3 ? `${line[1].epur()} ` : line[1].epur();
  if (!message.member.permissions.has("ViewAuditLog", true))
    message.channel.send(sentences[lang].ERROR_INSUFFICIENT_PERMISSIONS);
  else if (prefix === new_prefix)
    message.channel.send(sentences[lang].ERROR_PREFIX_ALREADY);
  else {
    await Server.findOneAndUpdate({ id }, { prefix: new_prefix });
    message.channel.send(format(sentences[lang].SUCCESS_PREFIX_CHANGED, new_prefix, `${new_prefix}help`));
  }
}
