import { NextRequest, NextResponse } from 'next/server';
import { securityCheck } from '../../../lib/security';
import { sendNotificationEmail } from '../../../lib/email';
import { isValidEmail } from '../../../lib/emailValidator';

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
    const mobile = data.mobile;
    const email = data.email;
    const property = data.property;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Full name and email are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // Log and send email notification (removed Supabase persistence)
    const logDetails = `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\nProperty: ${property}`;
    await sendNotificationEmail('[BRICX.AI BACKEND] PROSPECTUS REQUESTED', logDetails);

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
