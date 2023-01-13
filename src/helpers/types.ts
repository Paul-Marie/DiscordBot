import { Locale } from 'discord.js';

export type ServerType = {
  _id?:         string;
  id?:          string;
  name?:        string;
  floodMode?:   boolean;
  lang?:        string;
  prefix?:      string;
  displayRank?: boolean;
};

export type HelpOption = {
  lang:         string;
  prefix?:      string;
  locale?:      Locale;
};