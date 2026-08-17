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
    const email = data.email;

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required.' },
        { status: 400 }
      );
    }

    // Log and send email notification (removed Supabase persistence)
    await sendNotificationEmail(
      '[BRICX.AI BACKEND] NEWSLETTER SUBSCRIPTION',
      `Subscriber Email: ${email}`
    );

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!'
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || String(error) },
      { status: 500 }
    );
  }
}
