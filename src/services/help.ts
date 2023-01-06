import sentences        from "../languages";
import * as settings    from "../config.json";
import { EmbedBuilder } from 'discord.js';

// Return an Embed object containing all commands' informations
export const help = (_: void, { lang }: any): EmbedBuilder => (
  new EmbedBuilder()
    .setColor(0x4E4EC8)
    .setThumbnail(settings.thumbnailHelp)
    .addFields([
      { name: "`/help`",                     value: sentences[lang].INFO_HELP_BASE    },
      { name: "`/info`",                     value: sentences[lang].INFO_HELP_ABOUT   },
      { name: "`/lang ['fr'|'en'|'es']`",    value: sentences[lang].INFO_HELP_LANG    },
      { name: "`/server [name]`",            value: sentences[lang].INFO_HELP_SERVER  },
      { name: "`/auto ['start'|'stop']`",    value: sentences[lang].INFO_HELP_AUTO    },
      { name: "`/remind ['start'|'stop']`",  value: sentences[lang].INFO_HELP_REMIND  },
      { name: "`/show`",                     value: sentences[lang].INFO_HELP_SHOW    },
      { name: "`/type [type]`",              value: sentences[lang].INFO_HELP_TYPE    },
      { name: "`/almanax [date|item|plus]`", value: sentences[lang].INFO_HELP_ALMANAX }
    ])
);
