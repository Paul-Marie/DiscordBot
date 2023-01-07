import { ApplicationCommandOptionType } from 'discord.js';

export const     lang = {
  name:          "lang",
  description:   "Change la langue du bot",
  options: [{
    name:        "langue",
    description: "La nouvelle langue que le bot utilisera",
    required:    true,
    type:        ApplicationCommandOptionType.String,
    choices: [{
      name:      "Francais",
      value:     "fr-FR"
    }, {
      name:      "Francais (Québec)",
      value:     "fr-CA"
    }, {
      name:      "English (United Kingdom)",
      value:     "en-GB"
    }, {
      name:      "Español",
      value:     "es-ES"
    }]
  }]
};
