import { NextRequest, NextResponse } from 'next/server';
import { securityCheck } from '../../../lib/security';
import { sendNotificationEmail } from '../../../lib/email';

export async function POST(request: NextRequest) {
  if (!securityCheck(request)) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized request origin.' },
      { status: 403 }
    );
  }

  try {
    const data = await request.json();
    const fullname = data.fullname;
    const email = data.email;
    const company = data.company;

    if (!fullname || !email || !company) {
      return NextResponse.json(
        { success: false, message: 'Full Name, Email, and Company are required.' },
        { status: 400 }
      );
    }

    // Log and send email notification (removed Supabase persistence)
    const logDetails = `Full Name: ${fullname}\nEmail: ${email}\nCompany: ${company}`;
    await sendNotificationEmail('[BRICX.AI BACKEND] NDA SIGNATURE LOGGED', logDetails);

    return NextResponse.json({
      success: true,
      message: 'NDA signed successfully! Access granted.'
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || String(error) },
      { status: 500 }
    );
  }
}
