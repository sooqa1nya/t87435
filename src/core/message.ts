import { MessageContext } from 'puregram';

import * as commands from '../commands';
import { ICommand } from '../commands/command.type';


export const messageManager = new class MessageManager {

    public middleware = async (context: MessageContext, next: Function): Promise<void> => {

        if (!context.hasText()) {
            return await next();
        }


        const command = this._detectCommand(context.text);

        if (!command) {
            await context.send('Команда не найдена');
            return await next();
        }

        await this._callCommandHandler(command.handler, context);

    };


    private _detectCommand = (message: string): ICommand | undefined => {
        return Object.values(commands).find(cmd => cmd.trigger.test(message));
    };


    private _callCommandHandler = async (commandHandler: ICommand['handler'], context: MessageContext) => {

        try {
            await commandHandler(context);
        } catch (e) {
            console.error(e);
        }

    };

};
