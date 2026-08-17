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
    const name = data.name;
    const email = data.email;
    const phone = data.phone;
    const message = data.message || 'New B2B Lead Brief';

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Full Name and Business Email are required.' },
        { status: 400 }
      );
    }

    // Log and send email notification (removed Supabase persistence)
    const logDetails = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const emailSent = await sendNotificationEmail('[BRICX.AI BACKEND] LEAD CAPTURED', logDetails);

    if (!emailSent) {
      return NextResponse.json(
        {
          success: false,
          message: 'We could not send your enquiry at this time. Please try again later.'
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Lead brief submitted successfully!'
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || String(error) },
      { status: 500 }
    );
  }
}
