import { I_Bot, I_infoForCallbackQuery, I_coinInfo } from "../../type";
import getCoin from "./getCoin";

const callbackQuery = (Bot: I_Bot, ChatID: number): void => {
    Bot.on('callback_query', (msg: I_infoForCallbackQuery) => {
        getCoin(msg.data)
            .then((resp: I_coinInfo) => {
                Bot.sendMessage(ChatID, `${msg.data}: ${resp.USD}`);
            })
            .catch((err: Error) => console.log(err));
    });
};

export default callbackQuery; 