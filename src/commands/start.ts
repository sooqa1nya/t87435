import { MessageContext } from 'puregram';
import { ICommand } from './command.type';

export const start = new class Start implements ICommand {

    readonly trigger = /^\/start/;

    public handler = async (context: MessageContext): Promise<void> => {

        await context.reply(`ohayo`);
    };

};