import { MessageContext } from 'puregram';

import { ICommand } from './command.type';
import { sendMessage } from '../telegram-methods';
import { kb_createTicket } from '../keyboard';

const message = `Разработка Telegram-ботов под ключ:
– Автоматизация заявок, рассылок, FAQ, квизов
– Воронки, формы, CRM-интеграции
Создание Mini Apps (встроенных приложений в Telegram):
– Интерфейс с кнопками, формами, каталогами
– Подключение к API, базам данных, платёжным системам
Сопровождение и доработка ботов:
– Поддержка существующих решений
– Рефакторинг, добавление новых функций
– Оптимизация скорости 
Консультации и проектирование:
– Поможем спроектировать логику бота от А до Я под вашу задачу
– Оценим сложность, сроки, подскажем лучшие практики`;

export const officesCommand = new class OfficesCommand implements ICommand {

    public readonly trigger = /^🌟 Услуги$/;

    public async handler(context: MessageContext): Promise<any> {

        if (!context.hasFrom()) return;

        await context.delete();


        await sendMessage(context.senderId, message, await kb_createTicket());

    }
};