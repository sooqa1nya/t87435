import { StepScene } from '@puregram/scenes';
import { CallbackQueryContext, MessageContext } from 'puregram';


export const createTicket = new StepScene('createTicket', [
    (context) => {
        if (context.scene.step.firstTime) {
            return context.is('message') ? context.send('▶️ Отправьте Ваше имя') : (context as any).message.send('▶️ Отправьте Ваше имя');
        }

        context.scene.state.firstName = context.text;

        return context.scene.step.next();
    },

    (context) => {

        if (context.scene.step.firstTime) {
            return context.send('▶️ Отправьте Ваш номер телефона');
        }

        context.scene.state.phoneNumber = context.text;

        return context.scene.step.next();
    },

    (context) => {

        if (context.scene.step.firstTime) {
            return context.send('▶️ Отправьте название необходимой услуги');
        }

        context.scene.state.office = context.text;

        return context.scene.step.next();
    },

    (context) => {
        context.send('✅ Заявка зарегистрирована!');

        return context.scene.step.next();
    }
]);