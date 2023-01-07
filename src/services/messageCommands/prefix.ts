import Server      from "../../models/server";
import sentences   from "../../languages";
import { Message } from 'discord.js';
import { format  } from 'format';

// Change discord' server prefix
export const prefix = async (message: Message, line: string[], config: any): Promise<Message> => {
  if (line.length !== 2)
    return message.channel.send(format(sentences[config.lang].ERROR_INSUFFICIENT_ARGUMENT, `${config.prefix}prefix [new_prefix]`));
  const prefix: string = line[1].epur().length >= 3 ? `${line[1].epur()} ` : line[1].epur();
  if (!message.member.permissions.has("ViewAuditLog", true))
    message.channel.send(sentences[config.lang].ERROR_INSUFFICIENT_PERMISSIONS);
  else if (config.prefix === prefix)
    message.channel.send(sentences[config.lang].ERROR_PREFIX_ALREADY);
  else {
    await Server.findOneAndUpdate({ identifier: config.identifier }, { prefix });
    message.channel.send(format(sentences[config.lang].SUCCESS_PREFIX_CHANGED, `${prefix}help`));
  }
}
