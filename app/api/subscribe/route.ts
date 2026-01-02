import mailchimp from '@mailchimp/mailchimp_marketing';
import { NextResponse } from 'next/server';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        const response = await mailchimp.lists.addListMember(
            process.env.MAILCHIMP_AUDIENCE_ID!,
            {
                email_address: email,
                status: 'subscribed',
            }
        );

        return NextResponse.json(
            { message: 'Successfully subscribed!' },
            { status: 200 }
        );
    } catch (error: any) {
        // Handle already subscribed
        if (error.status === 400 && error.response?.body?.title === 'Member Exists') {
            return NextResponse.json(
                { error: 'This email is already subscribed' },
                { status: 400 }
            );
        }

        console.error('Mailchimp error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
