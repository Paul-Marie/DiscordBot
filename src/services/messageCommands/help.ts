import { Message    } from 'discord.js';
import { helpEmbed  } from "../../helpers/embed";
import { ServerType } from "../../helpers/types";

// Send an Embed object containing all commands' informations
export const help = (message: Message, _: void, { lang, prefix }: ServerType): void => {
  message.channel.send(helpEmbed({ lang, prefix }));
};
