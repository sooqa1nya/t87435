import { CallbackQueryContext, MessageContext } from 'puregram';

export interface ICommand {
    trigger: RegExp;
    handler(context: MessageContext | CallbackQueryContext): Promise<void>;
}