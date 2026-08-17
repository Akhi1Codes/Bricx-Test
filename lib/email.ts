import nodemailer from 'nodemailer';

/**
 * Sends a notification email if SMTP environment variables are configured.
 * Also logs the details to console in all cases.
 * Returns true when the notification email was sent successfully, false otherwise.
 */
export async function sendNotificationEmail(subject: string, text: string): Promise<boolean> {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receiver = process.env.CONTACT_RECEIVER_EMAIL;

  // Always keep the console.log matching Flask's logging behavior
  console.log(`\n[BRICX.AI BACKEND LOG]\nSubject: ${subject}\nDetails:\n${text}\n`);

  if (!host || !port || !user || !pass || !receiver) {
    console.warn('[EMAIL] WARNING: SMTP credentials or receiver email not configured in environment. Notification email was NOT sent.');
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: parseInt(port, 10),
      secure: parseInt(port, 10) === 465, // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"BRICX.AI Portal" <${user}>`,
      to: receiver,
      subject: subject,
      text: text,
    });
    console.log('[EMAIL] Notification email sent successfully.');
    return true;
  } catch (error) {
    console.error('[EMAIL] Failed to send notification email:', error);
    return false;
  }
}
