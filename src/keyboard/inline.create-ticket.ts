import { InlineKeyboard } from 'puregram';


export const kb_createTicket = async () => {
    return InlineKeyboard.keyboard([InlineKeyboard.textButton({ text: `➕ Создать заявку`, payload: { cmd: '!createTicket' } })]);
};