import { CallbackQueryContext } from 'puregram';

import { ICommand } from './command.type';
import { StepContext } from '@puregram/scenes';


export const createTicket = new class CreateTicket implements ICommand {

    public readonly trigger = /^!createTicket$/;

    public async handler(context: CallbackQueryContext & StepContext): Promise<any> {

        return context.scene.enter('createTicket');
    }

};