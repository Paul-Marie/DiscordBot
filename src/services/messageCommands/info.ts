import sentences                 from "../../languages";
import * as settings             from "../../config.json";
import { Message, EmbedBuilder } from 'discord.js';
import { format                } from 'format';

// Send an Embed object containing all bot's informations
export const info = (message: Message, line: void, config: any): void => {
  const embeds: EmbedBuilder[] = [
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
        name: "Discord:",
        value: `[Discord](${settings.discordUrl})`
      }, {
        name: sentences[config.lang].INFO_ABOUT_INVIT,
        value: `[Invitation](${settings.inviteLink})`,
        inline: true
      }])
    ];
  message.channel.send({ embeds });
};
