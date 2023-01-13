import { Message    } from 'discord.js';
import { aboutEmbed } from "../../helpers/embed";
import { ServerType } from "../../helpers/types";

// Send an Embed object containing all bot's informations
export const about = (message: Message, _line: void, { lang }: ServerType): void => {
  message.channel.send(aboutEmbed(lang));
};
