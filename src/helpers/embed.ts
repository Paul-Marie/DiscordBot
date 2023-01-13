import { format                           } from 'format';
import { EmbedBuilder, BaseMessageOptions } from 'discord.js';
import { HelpOption                       } from "./types";
import { getCommandName, getOptionName    } from "./fromCommandsDefinitions";
import * as config                          from "../config.json";
import sentences                            from "../languages";

// Return an Embed object containing all bot's informations
export const aboutEmbed = (lang: string): BaseMessageOptions => ({
  embeds: [
    new EmbedBuilder()
      .setColor(0x4E4EC8)
      .setDescription(format(sentences[lang].INFO_ABOUT_DESCRIPTION, config.botName))
      .setImage("https://i.imgur.com/mcpPHoh.png")
      .addFields([{
        name:   sentences[lang].INFO_ABOUT_CREATOR,
        value:  sentences[lang].INFO_ABOUT_CREATOR_CONTENT,
        inline: true
      }, {
        name:   sentences[lang].INFO_ABOUT_PROJECTS,
        value:  sentences[lang].INFO_ABOUT_PROJECTS_CONTENT,
        inline: true
      }, {
        name:   sentences[lang].INFO_ABOUT_INVIT,
        value:  `[Invitation](${config.inviteLink})`,
        inline: true
      }])
    ]
});

// Return an Embed object containing all commands' informations
export const helpEmbed = ({ lang, prefix, locale }: HelpOption): BaseMessageOptions => ({
  embeds: [
    new EmbedBuilder()
      .setColor(0x4E4EC8)
      .setThumbnail(config.thumbnailHelp)
      .addFields([{
        name: `\`${prefix ?? '/'}${getCommandName("help",     locale ?? lang)}\``,
        value: sentences[lang].INFO_HELP_BASE
      }, {
        name: `\`${prefix ?? '/'}${getCommandName("about",    locale ?? lang)}\``,
        value: sentences[lang].INFO_HELP_ABOUT
      }, {
        name: `\`${prefix ?? '/'}${getCommandName("language", locale ?? lang)} [${getOptionName("language", lang)}]\``,
        value: sentences[lang].INFO_HELP_LANG
      }, {
        name: `\`${prefix ?? '/'}${getCommandName("prefix",   locale ?? lang)} [${getOptionName("prefix",   lang)}]\``,
        value: sentences[lang].INFO_HELP_PREFIX
      }])
  ]
});