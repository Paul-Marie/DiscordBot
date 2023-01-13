import * as commandName from "../slashCommandsDefinitions";

export const getCommandName = (command: string, lang?: string): string => (
  commandName[command].name_localizations[lang ?? "en-GB"]
);

export const getOptionName = (command: string, lang?: string, position: number = 0): string => (
  commandName[command].options[position ?? 0].name_localizations[lang ?? "en-GB"]
);
