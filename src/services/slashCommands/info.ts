import sentences                            from "../../languages";
import * as settings                        from "../../config.json";
import { BaseMessageOptions, EmbedBuilder } from 'discord.js';
import { format                           } from 'format';

// Return an Embed object containing all bot's informations
export const info = (command: void, config: any): BaseMessageOptions => ({
  embeds: [
    new EmbedBuilder()
      .setColor(0x4E4EC8)
      .setDescription(format(sentences[config.lang].INFO_ABOUT_DESCRIPTION, settings.botName))
      .setImage("https://i.imgur.com/mcpPHoh.png")
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
    ]
});
