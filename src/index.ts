import { Telegram } from 'puregram';
import { callbackManager, messageManager } from './core';
import 'dotenv/config';


const telegram = new Telegram({
    token: process.env.BOT_TOKEN,
    apiRetryLimit: -1
});

telegram.updates.on('message', messageManager.middleware);
telegram.updates.on('callback_query', callbackManager.middleware);

telegram.updates
    .startPolling()
    .then(() => console.log(`${telegram.bot.username} successfully started..`))
    .catch(error => console.error(`Startup error (puregram):`, error));