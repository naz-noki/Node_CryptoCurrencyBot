import { I_Bot } from "../../type";

const setMyCommands = (Bot: I_Bot): void => {
    Bot.setMyCommands([
        {
            command: '/start',
            description: 'Начать',
        },
    ]);
};

export default setMyCommands;