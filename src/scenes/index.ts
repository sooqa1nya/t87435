import { SceneManager } from '@puregram/scenes';

import { createTicket } from './user.create-ticket';

const scene = new SceneManager();
export const sceneManager = scene.addScenes([
    createTicket
]);