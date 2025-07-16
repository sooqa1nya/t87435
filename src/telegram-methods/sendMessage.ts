import { ReplyMarkupUnion, SendMessageParams } from 'puregram/generated';
import { telegram } from '../index';


export const sendMessage = async (chat_id: number | string, text: string, reply_markup?: ReplyMarkupUnion, entities?: any) => {

    let params: SendMessageParams = {
        chat_id,
        text,
        disable_web_page_preview: true,
    };

    reply_markup ? params.reply_markup = reply_markup : null;
    entities ? params.entities = entities : params.parse_mode = 'html';


    return await telegram.api.sendMessage(params);

};     