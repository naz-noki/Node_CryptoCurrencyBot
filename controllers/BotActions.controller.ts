import { I_Bot, I_infoForMessage} from "../type";
import setMyCommands from "../functions/BotActions/setMyCommands";
import firstMessage from "../functions/BotActions/firstMessage";
import callbackQuery from "../functions/BotActions/callbackQuery";
import callbackMessage from "../functions/BotActions/callbackMessage";

class BotActionsController {
    #Bot: I_Bot;
    #ChatID: number | null;
    #UserName: string | null;
    setMyCommands: (Bot: I_Bot) => void;
    firstMessage: (Bot: I_Bot, ChatID: number, UserName: string) => void;
    callbackQuery: (Bot: I_Bot, ChatID: number) => void;
    callbackMessage: (Bot: I_Bot, ChatID: number, value: string) => void;

    constructor(bot: I_Bot) {
        this.#Bot = bot;
        this.#ChatID = null;
        this.#UserName = null;

        this.BotActionsRouter = this.BotActionsRouter.bind(this);
        this.setMyCommands = setMyCommands.bind(this);
        this.firstMessage = firstMessage.bind(this);
        this.callbackQuery = callbackQuery.bind(this);
        this.callbackMessage = callbackMessage.bind(this);

        this.setMyCommands(this.#Bot);
    };
    

    BotActionsRouter(data:I_infoForMessage) {
        this.#ChatID = data.chat.id;
        this.#UserName = data.chat.first_name;
        this.callbackQuery(this.#Bot, this.#ChatID);

        switch(data.text) {
            case '/start': {
                this.firstMessage(this.#Bot, this.#ChatID, this.#UserName);
                break;
            };
            default: {
                this.callbackMessage(this.#Bot, this.#ChatID, data.text);
                break;
            };
        };
    };
};

export default BotActionsController;