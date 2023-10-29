import { I_Bot } from "../../type";

const firstMessage = (Bot: I_Bot, ChatID: number, UserName: string): void => {
    Bot.sendMessage(ChatID, `Отлично, ${UserName}. Давайте начнём!`);
    Bot.sendMessage(ChatID, 'Выберите нужную криптовалюту.');

    Bot.sendMessage(ChatID, 'Если не найдёте её в списке, пришлите название.', {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Bitcoin', callback_data: 'BTC'},{text: 'Tether', callback_data: 'USDT'},{text: 'Litecoin', callback_data: 'LTC'},],
                [{text: 'Ethereum', callback_data: 'ETH'},{text: 'Ripple', callback_data: 'XRP'},{text: 'Dogecoin', callback_data: 'DOGE'},],
                [{text: 'Solana', callback_data: 'SOL'},{text: 'Monero', callback_data: 'XMR'},{text: 'Binance Coin', callback_data: 'BNB'},],
            ],
        }),
    });
};  

export default firstMessage;