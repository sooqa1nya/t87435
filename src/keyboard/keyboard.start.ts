import { Keyboard } from 'puregram';

export const kb_start = () => {
    return Keyboard.keyboard([
        [Keyboard.textButton('🌟 Услуги'), Keyboard.textButton('➕ Создать заявку')]
    ]).resize();
};