import { ApplicationCommandOptionType } from 'discord.js';

export const     prefix = {
  name:          "prefix",
  name_localizations: {
    "en-GB":     "prefix",
    "en-US":     "prefix",
    "fr":        "préfixe",
    "es-ES":     "prefijo",
  },
  description:   "Change message commands prefix",
  descriptions_localizations: {
    "en-GB":     "Change message commands prefix",
    "en-US":     "Change message commands prefix",
    "fr":        "Modifie le préfixe des commandes dans le tchat",
    "es-ES":     "Cambiar el prefijo de comando por mensaje",
  },
  options: [{
    name:        "prefix",
    name_localizations: {
      "en-GB":   "prefix",
      "en-US":   "prefix",
      "fr":      "préfixe",
      "es-ES":   "prefijo",
    },
    description: "Le nouveaux prefix",
    descriptions_localizations: {
      "en-GB":   "The new prefix",
      "en-US":   "The new prefix",
      "fr":      "Le nouveaux préfixe",
      "es-ES":   "El nuevo prefijo",
    },
    required:    true,
    type:        ApplicationCommandOptionType.String
  }, {
    name:        "separated",
    name_localizations: {
      "en-GB":   "separated",
      "en-US":   "separated",
      "fr":      "séparé",
      "es-ES":   "separado",
    },
    description: "If enabled, the prefix will be separated from the command by a space, ie: `% help`",
    descriptions_localizations: {
      "en-GB":   "If enabled, the prefix will be separated from the command by a space, ie: `% help`",
      "en-US":   "If enabled, the prefix will be separated from the command by a space, ie: `% help`",
      "fr":      "Si activé, le préfixe sera séparer par un espace de la commande, ex: `% aide`",
      "es-ES":   "Si está habilitado, el prefijo estará separado del comando por un espacio, ej: `% ayuda`",
    },
    type:        ApplicationCommandOptionType.Boolean
  }]
};
