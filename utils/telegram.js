const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID;

export async function sendTelegramMessage(text, buttons = []) {
  const reply_markup = {
    inline_keyboard: buttons,
  };

  await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHANNEL_ID,
      caption: text,
      parse_mode: "HTML",
      reply_markup,
    }),
  });
}
