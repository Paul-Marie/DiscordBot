import { BaseMessageOptions } from 'discord.js';
import { aboutEmbed         } from "../../helpers/embed";
import { ServerType         } from "../../helpers/types";

// Return an Embed object containing all bot's informations
export const about = (_command: void, { lang }: ServerType): BaseMessageOptions => (
  aboutEmbed(lang)
);
