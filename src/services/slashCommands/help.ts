import { CommandInteraction, BaseMessageOptions } from 'discord.js';
import { ServerType                             } from "../../helpers/types";
import { helpEmbed                              } from "../../helpers/embed";

// Return an Embed object containing all commands' informations
export const help = ({ locale }: CommandInteraction, { lang }: ServerType): BaseMessageOptions => (
  helpEmbed({ lang, locale })
);
