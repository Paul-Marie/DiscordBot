import luxon                                      from 'luxon';
import { BaseMessageOptions, ButtonInteraction  } from 'discord.js';
import { createEmbed                            } from "../../helpers/embed";
import { createButtons                          } from "../../helpers/buttons";

// Handle almanax's embed buttons
export const button = async (interaction: ButtonInteraction, config: any): Promise<void> => {
  const [action, date, origin]: string[] = interaction.customId?.split('@');
  const newDate: string = {
    prev:   luxon(date, "YYYY-MM-DD").subtract(1, "day").format("YYYY-MM-DD"),
    next:   luxon(date, "YYYY-MM-DD").add(     1, "day").format("YYYY-MM-DD"),
    reload: date
  }[action];
  await [
    async () => (
      await interaction.reply({
        //content: await remindButton(date, interaction.user.id, config), ephemeral: true
      })
    ),
    async () => {
      origin && !interaction.deferred && setTimeout(async () => (
        await interaction.editReply({
          embeds: [await createEmbed(undefined, config.server)],
          ...createButtons(origin)
        } as BaseMessageOptions)
      ), 120000);
      !interaction.deferred && await interaction.deferUpdate();
      await interaction.editReply({
        embeds: [await createEmbed(undefined, config.server)],
        ...createButtons(newDate, true)
      } as BaseMessageOptions);
    }
  ][action !== "remind" ? 1 : 0]();
};
