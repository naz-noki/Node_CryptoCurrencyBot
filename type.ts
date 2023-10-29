export interface I_infoForChat {
    id: number,
    first_name: string,
    username: string,
};

export interface I_infoForMessage {
    chat: I_infoForChat,
    text: string,
};

export interface I_infoForCallbackQuery extends I_infoForMessage {
    data: string,
}; 

export interface I_commandForBot {
    command: string,
    description: string,
};

export interface I_sendMessageOptions {
    reply_markup: string,
};

export interface I_Bot {
    setMyCommands: (args: I_commandForBot[]) => void,
    sendMessage: (id: number, message: string, options?: I_sendMessageOptions) => void,
    sendPhoto: (id: number, photo: string, options?: I_sendMessageOptions) => void,
    on: (event: string, cb: (msg: any) => void) => void,
}; 

export interface I_coinInfo {
    USD: number,
};