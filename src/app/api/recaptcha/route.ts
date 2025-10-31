import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { token } = await request.json();
        const secret = process.env.RECAPTCHA_SECRET_KEY;
        if (!secret) {
            return NextResponse.json({ success: false, error: 'Missing server secret' }, { status: 500 });
        }
        const params = new URLSearchParams();
        params.set('secret', secret);
        params.set('response', token);

        const verify = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
            // Google requires network; this runs server-side
            cache: 'no-store',
        });
        const data = await verify.json();
        return NextResponse.json({ success: !!data.success, score: data.score, action: data.action, ...data }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ success: false, error: 'Verification failed' }, { status: 400 });
    }
}


