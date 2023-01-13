/*
  This file contain all the discord logic.
*/
import {
  Client,
  REST,
  Routes,
  Message,
  Interaction,
  Guild,
  ActivityType,
  GatewayIntentBits,
  BaseMessageOptions
}                    from 'discord.js';
import {
  messageCommands,
  slashCommands
}                    from "./services/";
import * as config   from "./config.json";
import * as commands from "./slashCommandsDefinitions";
import sentences     from "./languages";
import Server        from "./models/server";

const rest = new REST({ version: '10' }).setToken(config.discordToken);
export const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages
  ]
});

// Called when the bot is online
bot.on("ready", async (): Promise<void> => {
  console.info(`Curently connected on (${bot.guilds.cache.size}) servers:`);
  const commandsList = Object.keys(commands)?.map((name: string) => commands[name]);
  bot.guilds.cache.map(({ id, name, joinedTimestamp }) => ({ id, name, joinedTimestamp })).sort(
    (a: Guild, b: Guild) => b.joinedTimestamp - a.joinedTimestamp
  ).reverse().map(({ name }) => console.info(`🔸 ${name}`));
  const importedCmd: any = await rest.put(Routes.applicationCommands(bot.user.id), { body: commandsList });
  console.info(`${importedCmd.length} imported command${importedCmd.length ? 's' : ''}.`);
  await bot.user.setActivity(config.botDescription, { type: ActivityType.Playing });
});

// bot.on("error", ({ message }) => {
//   console.trace(`Error: ${message}`);
// });

// Called when the bot join a new Discord' server / guild
bot.on("guildCreate", async (guild: Guild): Promise<void> => {
  const server = await Server.findOne({ id: guild.id });
  if (server)
    return;
  await Server.create({
    id: guild.id,
    name: guild.name,
    lang: "fr-FR",
    prefix: config.defaultPrefix
  });
  const owner = await guild.fetchOwner();
  config.greetOwner && owner?.send("");
});

// Called when the bot is kick or ban of a discord' server / guild
bot.on("guildDelete", async ({ id }): Promise<void> => {
  await Server.findOneAndDelete({ id });
});

// Called each time a message is posted on a guild where Bwuno belongs to
bot.on("messageCreate", async (message: Message): Promise<void> => {
  if (message.author.bot)
    return;
  const { content, guild          } = message;
  const { username, discriminator } = message.author;
  const server = await Server.findOne({ id: guild.id });
  if (message.mentions.has(bot.user) && !message.mentions.everyone)
    await message.channel.send(sentences[server.lang].INFO_MENTION);
  else if (content.toLowerCase().startsWith(server?.prefix)) {
    const author   = `${username}#${discriminator}`;
    const response = content.epur().replace(server.prefix, '').trim();
    const inputs   = response.split(" ");
    console.info(`${author}: ${content}`);
    if (config.handlePrefix) {
      const command = messageCommands[inputs[0]]
      command
        ? await command(message, inputs, server)
        : await message.channel.send(`use: \`/${inputs[0]}\``);
    } else
      await message.channel.send(`I don't support prefixed commands, use slashcommands one`);
  }
});

// Called each time a message is posted on a channel where the bot belongs
bot.on("interactionCreate", async (interaction: Interaction): Promise<void> => {
  const { username, discriminator } = interaction.user;
  const server = await Server.findOne({
    id: interaction.guild?.id
  }) ?? { lang: "fr-FR" };
  if (interaction.isCommand()) {
    const { commandName } = interaction;
    const { data        } = interaction.options;
    const parameters      = data.length ? `(${data?.[0]?.name}):${data?.[0]?.value}` : '';
    console.info(`${username}#${discriminator}: /${commandName} ${parameters}`);
    const message: BaseMessageOptions = await slashCommands[commandName](interaction, server);
    message && await interaction.reply(message);
  } else if (interaction.isButton()) {
    console.info(`${username}#${discriminator}: ${interaction.customId}`);
    await slashCommands.button(interaction, server);
  }
});
