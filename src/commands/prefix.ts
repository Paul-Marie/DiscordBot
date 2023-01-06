import { ApplicationCommandOptionType } from 'discord.js';

export const     prefix = {
  name:          "prefix",
  description:   "Change le prefix des commandes message",
  options: [{
    name:        "prefix",
    description: "Le nouveaux prefix",
    required:    true,
    type:        ApplicationCommandOptionType.String
  }, {
    name:        "unified",
    description: "Si désactivé, le prefix sera considerer comme un mot séparer, ie: `% help`",
    required:    false,
    default:     true,
    type:        ApplicationCommandOptionType.Boolean
  }]
};
