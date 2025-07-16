import { Telegram } from 'puregram';
import { callbackManager, messageManager } from './core';

import { SessionManager } from '@puregram/session';
import { sceneManager } from './scenes';
import 'dotenv/config';


export const telegram = new Telegram({
    token: process.env.BOT_TOKEN,
    apiRetryLimit: -1
});

const sessionManager = new SessionManager();

telegram.updates.use(sessionManager.middleware);
telegram.updates.use(sceneManager.middleware);
telegram.updates.use(sceneManager.middlewareIntercept);

telegram.updates.on('message', messageManager.middleware);
telegram.updates.on('callback_query', callbackManager.middleware);



telegram.updates
    .startPolling()
    .then(() => console.log(`${telegram.bot.username} successfully started..`))
    .catch(error => console.error(`Startup error (puregram):`, error));