import { CallbackQueryContext } from 'puregram';

import * as commands from '../commands';
import { ICommand } from '../commands/command.type';


export const callbackManager = new class CallbackManager {

    public middleware = async (context: CallbackQueryContext, next: Function): Promise<void> => {

        if (!context.hasQueryPayload()) {
            return await next();
        }


        const command = this._detectCommand(<string>context.queryPayload);

        if (!command) {
            await context.message?.send('Кнопка не найдена');
            return await next();
        }

        await this._callCommandHandler(command.handler, context);

    };


    private _detectCommand = (message: string): ICommand | undefined => {
        return Object.values(commands).find(cmd => cmd.trigger.test(message));
    };


    private _callCommandHandler = async (commandHandler: ICommand['handler'], context: CallbackQueryContext) => {

        try {
            await commandHandler(context);
        } catch (e) {
            console.error(e);
        }

    };

};
