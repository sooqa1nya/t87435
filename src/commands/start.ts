import { MessageContext } from 'puregram';
import { ICommand } from './command.type';
import { sendMessage } from '../telegram-methods';
import { kb_start } from '../keyboard';

const message = `<i>Привет! Это твой личный ассистент. 
Я помогу тебе выбрать услугу и передам заявку
нашей команде. 
Нажми «Услуги», чтобы посмотреть, что мы предлагаем или выбери действие из меню ниже.</i>`;

export const start = new class Start implements ICommand {

    readonly trigger = /^\/start/;

    public handler = async (context: MessageContext): Promise<void> => {
        if (!context.isPM()) return;
        if (!context.hasFrom()) return;

        await context.delete();

        await sendMessage(context.from.id, message, kb_start());
    };

};