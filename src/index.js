import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import { handlePanelCommand } from './commands/panelCommand.js';
import { handleInteraction } from './handlers/interactionHandler.js';
import { ServiceManager } from './services/serviceManager.js';
import { checkCopyright } from './safezone/copy/loqmanas/copyright/copyrightCheckerlq1.js';

await checkCopyright();



dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', async () => {
  console.log('Bot is ready!');
  await ServiceManager.loadServices();
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  await handlePanelCommand(message);
});

client.on('interactionCreate', handleInteraction);

client.login(process.env.DISCORD_TOKEN);

// © All rights reserved to Loqmanas (L.Q1).  