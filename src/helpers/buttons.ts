import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

//
export const createNavigationButtons = (date: string, mode?: boolean): ActionRowBuilder => (
  new ActionRowBuilder().addComponents([
    new ButtonBuilder()
      .setCustomId(`prev@${date}${!mode ? `@${date}` : ''}`)
      .setStyle(ButtonStyle.Secondary)
      .setEmoji("946186554517389332"),
    new ButtonBuilder()
      .setCustomId(`reload@${date}`)
      .setStyle(ButtonStyle.Success)
      .setEmoji("946190012154794055"),
    new ButtonBuilder()
      .setCustomId(`remind@${date}`)
      .setStyle(ButtonStyle.Primary)
      .setEmoji("946192601806155806"),
    new ButtonBuilder()
      .setCustomId(`next@${date}${!mode ? `@${date}` : ''}`)
      .setStyle(ButtonStyle.Secondary)
      .setEmoji("946186699745161296")
  ])
);

export const createButtons = (date, mode?: boolean) => ({
  components: [ createNavigationButtons(date, mode) ]
})