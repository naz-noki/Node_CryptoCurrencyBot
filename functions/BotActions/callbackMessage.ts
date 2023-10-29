import { I_Bot, I_coinInfo } from "../../type";
import getCoin from "./getCoin";

const callbackMessage = (Bot: I_Bot, ChatID: number, value: string): void => {
    getCoin(value)
        .then((resp: I_coinInfo) => {
            if(resp.USD === undefined) Bot.sendMessage(ChatID, 'Такая монета не найдена.');
            else Bot.sendMessage(ChatID, `${value}: ${resp.USD}`);
        })
        .catch((err: Error) => {
            console.log(err);
            Bot.sendMessage(ChatID, 'Ошибка, попробуйте ещё.');
        });
};

export default callbackMessage; 