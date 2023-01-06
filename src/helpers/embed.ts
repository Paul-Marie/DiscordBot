import { EmbedBuilder } from 'discord.js';
// import * as sentences           from "../../resources/language.json";
import * as config from "../config.json";

// Create an embed with all almanax of day's informations
export const createEmbed = async (almanax: any, id: number): Promise<EmbedBuilder> => (
  new EmbedBuilder()
    .setColor('#FF0000')
    .setTitle("")
    .setDescription("")
    .setImage(config.notFoundUrl)
    .setTimestamp()
    .setFooter({ text: "", iconURL: config.thumbnailAuthor })
    .setFields([])
);

// Create an Embed sent in case of error(s)
export const createErrorEmbed = async (lang: number, link: string, mode: number): Promise<EmbedBuilder> => (
  new EmbedBuilder()
    .setColor('#FF0000')
    .setTitle("")
    .setDescription("")
    .setImage(config.notFoundUrl)
    .setTimestamp()
    .setFooter({ text: "", iconURL: config.thumbnailAuthor })
    .setFields([])
);
