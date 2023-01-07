import sentences        from "../../languages";
import * as settings    from "../../config.json";
import { EmbedBuilder, BaseMessageOptions } from 'discord.js';

// Return an Embed object containing all commands' informations
export const help = (command: void, { lang }): BaseMessageOptions => ({
  embeds: [
    new EmbedBuilder()
      .setColor(0x4E4EC8)
      .setThumbnail(settings.thumbnailHelp)
      .addFields([{
        name: "`/help`",
        value: sentences[lang].INFO_HELP_BASE
      }, {
        name: "`/info`",
        value: sentences[lang].INFO_HELP_ABOUT
      }, {
        name: "`/lang ['fr-FR'|'en-GB']`",
        value: sentences[lang].INFO_HELP_LANG
      }, {
        name: "`/prefix [prefix]`",
        value: sentences[lang].INFO_HELP_PREFIX
      }])
  ]
});
