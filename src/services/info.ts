import * as sentences         from "../languages";
import * as settings          from "../config.json";
import { BaseMessageOptions, EmbedBuilder } from 'discord.js';

// Return an Embed object containing all bot's informations
export const info = (command: void, config: any): BaseMessageOptions => ({
  embeds: [
    new EmbedBuilder()
      .setColor(0x4E4EC8)
      .setDescription(sentences[config.lang].INFO_ABOUT_DESCRIPTION/*, settings.botName*/)
      .addFields([{
        name: sentences[config.lang].INFO_ABOUT_CREATOR,
        value: sentences[config.lang].INFO_ABOUT_CREATOR_CONTENT,
        inline: true
      }, {
        name: sentences[config.lang].INFO_ABOUT_PROJECTS,
        value: sentences[config.lang].INFO_ABOUT_PROJECTS_CONTENT,
        inline: true
      }, {
        name: sentences[config.lang].INFO_ABOUT_INVIT,
        value: `[Invitation](${settings.inviteLink})`,
        inline: true
      }])
      .setImage("https://i.imgur.com/mcpPHoh.png")
    ]
});
