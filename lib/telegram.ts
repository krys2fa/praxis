import { Bot } from "grammy";

let bot: Bot | null = null;

function getBot(): Bot {
  if (!bot) {
    if (!process.env.TELEGRAM_BOT_TOKEN) {
      throw new Error("TELEGRAM_BOT_TOKEN is not set");
    }
    bot = new Bot(process.env.TELEGRAM_BOT_TOKEN);
  }
  return bot;
}

/** Send a message to a Telegram chat ID */
export async function sendTelegramMessage(
  chatId: string | number,
  text: string,
  parseMode: "HTML" | "Markdown" = "HTML"
) {
  const b = getBot();
  return b.api.sendMessage(chatId, text, { parse_mode: parseMode });
}

/** Broadcast a message to multiple chat IDs */
export async function broadcastTelegramMessage(
  chatIds: (string | number)[],
  text: string
) {
  const b = getBot();
  const results = await Promise.allSettled(
    chatIds.map((id) => b.api.sendMessage(id, text, { parse_mode: "HTML" }))
  );
  return results;
}

// ---------------------------------------------------------------------------
// Pre-built notification templates
// ---------------------------------------------------------------------------

export function newLessonNotification(
  courseTitle: string,
  lessonTitle: string,
  lessonUrl: string
): string {
  return (
    `🎓 <b>New Lesson Available</b>\n\n` +
    `Course: <b>${courseTitle}</b>\n` +
    `Lesson: <b>${lessonTitle}</b>\n\n` +
    `<a href="${lessonUrl}">▶️ Watch Now</a>`
  );
}

export function studyReminderNotification(
  studentName: string,
  courseTitle: string
): string {
  return (
    `⏰ <b>Study Reminder</b>\n\n` +
    `Hi ${studentName}! You haven't studied <b>${courseTitle}</b> recently.\n` +
    `Keep your streak going — 15 minutes is all it takes today! 🔥`
  );
}

export function courtDateReminderNotification(
  caseTitle: string,
  courtDate: string,
  courtName: string
): string {
  return (
    `⚖️ <b>Court Date Reminder</b>\n\n` +
    `Case: <b>${caseTitle}</b>\n` +
    `Date: <b>${courtDate}</b>\n` +
    `Court: <b>${courtName}</b>\n\n` +
    `Please ensure all documents are prepared.`
  );
}
