import { format                } from 'format';
import { Message, EmbedBuilder } from 'discord.js';
import * as settings             from "../../config.json";
import sentences                 from "../../languages";

// Return an Embed object containing all commands' informations
export const help = (message: Message, line: void, config: any): void => {
  const embeds: EmbedBuilder[] = [
    new EmbedBuilder()
      .setColor(0x4E4EC8)
      .setThumbnail(settings.thumbnailHelp)
      .setFields([{
        name: `\`${config.prefix}help\``,
        value: sentences[config.lang].INFO_HELP_BASE
      }, {
        name: `\`${config.prefix}info\``,
        value: format(sentences[config.lang].INFO_HELP_ABOUT, settings.botName)
      }, {
        name: `\`${config.prefix}lang ['fr-FR'|'en-GB']\``,
        value: format(sentences[config.lang].INFO_HELP_LANG, settings.botName)
      }, {
        name: `\`${config.prefix}prefix [prefix]\``,
        value: sentences[config.lang].INFO_HELP_PREFIX
      }])
    ];
  message.channel.send({ embeds });
};
