/*
  This file contain all the discord logic.
*/
import { Client, Message, Interaction,
  Guild, ActivityType,
  GatewayIntentBits   } from 'discord.js';
import { REST         } from '@discordjs/rest';
import { Routes       } from 'discord-api-types/v9';
import sentences        from "./languages";
import * as config      from "./config.json";
import * as services    from "./services/";
import * as commands    from "./commands/";
import Server           from "./models/server";

const rest = new REST({ version: '10' }).setToken(config.discordToken);
export const bot: Client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessageReactions
  ]
});

// Called when the bot is online
bot.on("ready", async (): Promise<void> => {
  const commandsList = Object.keys(commands)?.map((name: string) => commands[name]);
  bot.guilds.cache.map(({ id, name, joinedTimestamp }) => ({ id, name, joinedTimestamp })).sort(
    (a: Guild, b: Guild) => b.joinedTimestamp - a.joinedTimestamp
  ).reverse().map(({ name }) => console.info(`🔸 ${name}`));
  console.info(`Curently connected on (${bot.guilds.cache.size}) servers:`);
  const importedCmd: any = await rest.put(Routes.applicationCommands(bot.user.id), { body: commandsList });
  console.info(`${importedCmd.length} imported command${importedCmd.length ? 's' : ''}.`);
  await bot.user.setActivity("le Krosmoz", { type: ActivityType.Watching });
});

bot.on("error", ({ message }) => {
  console.info(`Error: ${message}`);
});

// Called when the bot join a new Discord' server / guild
bot.on("guildCreate", async (guild: Guild): Promise<void> => {
  const server = await Server.findOne({ identifier: guild.id });
  if (server)
    return;
  await Server.create({
    id: guild.id,
    name: guild.name,
    lang: 0,
    prefix: config.defaultPrefix
  });
  const owner = await guild?.fetchOwner();
  config.greetOwner && owner?.send("");
});

// Called when the bot is kick or ban of a discord' server / guild
bot.on("guildDelete", async (guild: Guild): Promise<void> => {
  await Server.findOneAndDelete({ id: guild.id });
});

// Called each time a message is posted on a guild where Bwuno belongs to
bot.on("messageCreate", async (message: Message): Promise<void> => {
  if (message.author.bot)
    return;
  const server = await Server.findOne({ id: message.guild.id });
  if (message.mentions.has(bot.user) && !message.mentions.everyone)
    await message.channel.send(sentences[server.lang].INFO_MENTION);
  else if (message.content.toLowerCase().startsWith(server?.prefix?.toLowerCase())) {
    const author   = `${message.author.username}#${message.author.discriminator}`;
    const response = message.content.epur().replace(server.prefix, '').trim();
    const inputs = response.split(" ");
    console.info(`${author}: ${message.content}`);
    const functions = { 
      "help": commands.help, "info": commands.info, '': commands.help,
      "prefix": commands.prefix, "lang": commands.lang
    };    
    if (config.handlePrefix) {
      functions[inputs[0].epur()](message, inputs, server);
    } else
      await message.channel.send(`use: \`/${inputs[0]}\``);
  }
});

// Called each time a message is posted on a channel where the bot belongs
bot.on("interactionCreate", async (interaction: Interaction): Promise<void> => {
  const { username, discriminator } = interaction.user;
  const server = await Server.findOne({ id: interaction.guild?.id });
  if (interaction.isCommand()) {
    const parameters = interaction.options.data.length ? `(${interaction.options?.data?.[0]?.name}):${interaction.options?.data?.[0]?.value}` : '';
    console.info(`${username}#${discriminator}: /${interaction.commandName} ${parameters}`);
    const reply      = await services[interaction.commandName.epur()](interaction, server);
    reply && await interaction.reply(reply);
  } else if (interaction.isButton()) {
    console.info(`${username}#${discriminator}: ${interaction.customId}`);
    await services.button(interaction, server);
  }
});
