import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);
export const FROM = process.env.EMAIL_FROM ?? "Praxis <no-reply@usepraxis.com>";

export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}) {
  return resend.emails.send({
    from: FROM,
    to: Array.isArray(to) ? to : [to],
    subject,
    html,
    text,
  });
}

// ---------------------------------------------------------------------------
// Email templates (inline — use React Email for richer templates later)
// ---------------------------------------------------------------------------

export function welcomeLearnEmail(name: string): string {
  return `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0F172A;color:#FAFAF9;border-radius:12px;">
      <h1 style="color:#F59E0B;font-size:28px;margin-bottom:8px;">Welcome to Praxis Learn</h1>
      <p style="color:#94A3B8;margin-bottom:24px;">Hi ${name}, your account is ready.</p>
      <p style="color:#FAFAF9;">Start exploring courses and learning at your own pace.</p>
      <a href="${process.env.NEXT_PUBLIC_LEARN_URL}/courses"
         style="display:inline-block;margin-top:24px;padding:12px 24px;background:#F59E0B;color:#0F172A;border-radius:8px;font-weight:600;text-decoration:none;">
        Browse Courses
      </a>
    </div>
  `;
}

export function newLessonEmail(
  studentName: string,
  courseTitle: string,
  lessonTitle: string,
  lessonUrl: string
): string {
  return `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0F172A;color:#FAFAF9;border-radius:12px;">
      <h2 style="color:#F59E0B;">New Lesson Available</h2>
      <p>Hi ${studentName},</p>
      <p>A new lesson has been added to <strong>${courseTitle}</strong>:</p>
      <p style="font-size:18px;color:#F59E0B;">${lessonTitle}</p>
      <a href="${lessonUrl}"
         style="display:inline-block;margin-top:24px;padding:12px 24px;background:#F59E0B;color:#0F172A;border-radius:8px;font-weight:600;text-decoration:none;">
        Watch Now
      </a>
    </div>
  `;
}

export function invoiceEmail(
  clientName: string,
  invoiceNumber: string,
  amount: string,
  dueDate: string,
  paymentLink: string
): string {
  return `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#FFFBEB;color:#1C1917;border-radius:12px;">
      <h2 style="color:#14532D;">Invoice from Praxis Legal</h2>
      <p>Dear ${clientName},</p>
      <p>Please find your invoice <strong>${invoiceNumber}</strong> for <strong>${amount}</strong>, due on <strong>${dueDate}</strong>.</p>
      <a href="${paymentLink}"
         style="display:inline-block;margin-top:24px;padding:12px 24px;background:#14532D;color:#FFFBEB;border-radius:8px;font-weight:600;text-decoration:none;">
        Pay Now
      </a>
    </div>
  `;
}
