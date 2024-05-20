const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Добро пожаловать! Нажмите на кнопку ниже, чтобы начать зарабатывать монеты.', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Начать игру', url: 'http://localhost:5354' }]
            ]
        }
    });
});