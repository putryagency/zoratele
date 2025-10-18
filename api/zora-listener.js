import { getNewCreators } from "../utils/zoraClient.js";
import { sendTelegramMessage } from "../utils/telegram.js";
import { getStoredCreators, storeCreator } from "../utils/storage.js";
import { formatCreatorMessage } from "../utils/formatMessage.js";

export default async function handler(req, res) {
  try {
    const creators = await getNewCreators();
    const stored = await getStoredCreators();

    for (const c of creators) {
      if (!stored.includes(c.address)) {
        const message = formatCreatorMessage(c);
        await sendTelegramMessage(message.text, message.buttons);
        await storeCreator(c.address);
      }
    }

    res.status(200).json({ success: true, checked: creators.length });
  } catch (err) {
    console.error("Error fetching new creators:", err);
    res.status(500).json({ error: err.message });
  }
}
