import TelegramBot from 'node-telegram-bot-api';
import BotActionsController from './controllers/BotActions.controller';
import { I_infoForMessage } from './type';
import dotenv from 'dotenv';

dotenv.config();

const MyBot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

const BotActions = new BotActionsController(MyBot);

MyBot.on('message', (data:I_infoForMessage) => BotActions.BotActionsRouter(data));