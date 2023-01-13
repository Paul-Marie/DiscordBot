import { ApplicationCommandOptionType } from 'discord.js';

export const     language = {
  name:          "language",
  name_localizations: {
    "en-GB":     "language",
    "en-US":     "language",
    "fr":        "langue",
    "es-ES":     "lengua",
  },
  description:   "Change bot's language on this server",
  description_localizations: {
    "en-GB":     "Change bot's language on this server",
    "en-US":     "Change bot's language on this server",
    "fr":        "Change la langue du bot sur ce serveur",
    "es-ES":     "Cambiar el idioma del bot en este servidor",
  },
  options: [{
    name:        "tongue",
    name_localizations: {
      "en-GB":   "tongue",
      "en-US":   "language",
      "fr":      "langue",
      "es-ES":   "idioma",
    },
    description: "The new language the bot will use on this server",
    description_localizations: {
      "en-GB":   "The new language the bot will use on this server",
      "en-US":   "The new language the bot will use on this server",
      "fr":      "La nouvelle langue que le bot utilisera sur ce serveur",
      "es-ES":   "El nuevo idioma que usará el bot en este servidor",
    },
    required:    true,
    type:        ApplicationCommandOptionType.String,
    choices: [{
      name:      "French",
      name_localizations: {
        "en-GB": "French",
        "en-US": "French",
        "fr":    "Français",
        "es-ES": "Francés",
      },
      value:     "fr"
    }, {
      name:      "English",
      name_localizations: {
        "en-GB": "English, UK",
        "en-US": "English, UK",
        "fr":    "Anglais",
        "es-ES": "Inglés",
      },
      value:     "en-GB"
    }, {
      name:      "Spanish",
      name_localizations: {
        "en-GB": "Spanish",
        "en-US": "Spanish",
        "fr":    "Espagnol",
        "es-ES": "Español",
      },
      value:     "es-ES"
    }]
  }]
};
