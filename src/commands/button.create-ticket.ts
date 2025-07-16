import { MessageContext } from 'puregram';

import { ICommand } from './command.type';
import { StepContext } from '@puregram/scenes';

export const bCreateTicket = new class BCreateTicket implements ICommand {

    public readonly trigger = /^➕ Создать заявку$/;

    public async handler(context: MessageContext & StepContext): Promise<any> {

        if (!context.hasFrom()) return;

        await context.delete();

        return context.scene.enter('createTicket');
    }
};