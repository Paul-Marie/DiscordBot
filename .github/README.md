<p align="center">
  <a href="" alt = "Invite the bot">
    <img src="https://github.com/Paul-Marie/DiscordBot/blob/master/.github/assets/band.jpg?raw=true" width="800">
  </a>
</p>
<p align="center">
  <a href="" alt="Invite the bot">
    <img src="https://img.shields.io/badge/Add-Bot-800080.svg?style=flat" />
  </a>
    <a href="https://github.com/discordjs">
    <img alt="discord.js" src="https://img.shields.io/badge/discord.js-v14.7.1-red.svg?logo=npm" >
  </a>
  <a href="https://www.typescriptlang.org/">
    <img alt="typescript" src="https://img.shields.io/badge/typescript-v4.9.4-blue.svg?logo=typescript" >
  </a>
  <a href="https://github.com/Paul-Marie/DiscordBot/commits/master">
    <img src="https://img.shields.io/github/last-commit/Paul-Marie/DiscordBot?style=flat-square&logo=github&logoColor=white" alt="GitHub last commit">
  </a>
  <a href="https://github.com/Paul-Marie/DiscordBot/commits/master" alt="Code Size">
    <img src="https://shields.io/github/languages/code-size/Paul-Marie/DiscordBot" />
  </a>
</p>

> **Warning**
> This is a template repository, allowing you to save time while creating a new Discord bot. it's just work but it's just a base, you will need to improve it to make an usable bot

<div align="center">

|  |  |  |
|--|--|--|
| [Fonctionnalities](#functionalities) | [Commands](#commands) | [Installation](#installation) |

</div>

<img src="https://github.com/Paul-Marie/DiscordBot/blob/master/.github/assets/border.png?raw=true" style="text-align:center" />

<h2 id="functionalities"> 📝 Fonctionnalities</h2>

*   🌠 Handle `slashCommands` and `prefixedMessages`
*   🤵 Configurable actions in `src/config.json`
*   💬 Usage of [discord.js v14.7](https://discord.js.org/#/docs/discord.js/14.7.1/general/welcome),one of the latest version
*   👄 Multi-languages support, just add your `.json` in `src/languages/` folder
*   ⚙️ Customization of the Discord server (prefix, DT server, etc...)

<img src="https://github.com/Paul-Marie/DiscordBot/blob/master/.github/assets/border.png?raw=true" />

<h2 id="commands">📚 Commands</h2>

| Commands    | Options    | Description                                                      |
|-------------|------------|------------------------------------------------------------------|
| [/help]()   |            | Displays help menu                                               |
| [/info]()   |            | Display basic bot's information, such as owner & support server  |
| [/lang]()   | `language` | Change the default language of DiscordBot on the Discord server |
| [/prefix]() | `prefix`   | Change the default prefix of the bot                             |

<img src="https://github.com/Paul-Marie/DiscordBot/blob/master/.github/assets/border.png?raw=true" />

<h2 id="instalation">📜 Instalation</h2>

```sh
git clone https://github.com/Paul-Marie/DiscordBot;
cd DiscordBot/
```
Now open the `./src/config.json` file and fill in the empty fields, such as the `discordToken` part where you must put your Discord bot token, then add the images associated with your future bot in the fields blank field.

Make sure you have a version of [Node.JS](https://nodejs.org/fr/download/) greater than 16.9.0,
Then launch your bot with [yarn](https://classic.yarnpkg.com/fr/docs/install/#debian-stable) or [npm](https://nodejs.org/fr/download/) (you've got the choice)
```sh
yarn;               # Used to install the necessary packages
yarn start;         # Launch the bot on your machine
```
I personally recommend you to use [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) or [screen](https://www.gnu.org/software/screen/screen.html) to keep your bot active all the time long.

> **Note**
> The file `src/discord.ts` export all Discord's logic, allowing you to export discord.js's `Client`, usefull to import it in `src/scripts/*.ts` without redefining it.

You can use your `src/scripts/*.ts` by invoking their name (without extension) as the 3rd argument with `yarn` such as:
```sh
yarn start makeDB;  # Optionally create your local database
```

<img src="https://github.com/Paul-Marie/DiscordBot/blob/master/.github/assets/border.png?raw=true" />

> Pop the ⭐ to contribute to the project 😎.
