'use client';

import { useState } from 'react';
import { executeRecaptcha } from '@/lib/recaptcha';

type RecaptchaBoxProps = {
    onVerified?: (token: string) => void;
};

export function RecaptchaBox({ onVerified }: RecaptchaBoxProps) {
    const [status, setStatus] = useState<'idle' | 'loading' | 'passed' | 'failed'>('idle');

    const handleClick = async () => {
        if (status === 'loading') return;
        setStatus('loading');
        try {
            const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;
            const token = await executeRecaptcha('contact_checkbox', siteKey);
            const verifyPath = process.env.NEXT_PUBLIC_RECAPTCHA_VERIFY_PATH || '/api/recaptcha';
            const res = await fetch(verifyPath, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            });
            const data = await res.json();
            if (res.ok && data.success) {
                setStatus('passed');
                onVerified?.(token);
            } else {
                setStatus('failed');
                console.error('reCAPTCHA verification failed', data);
            }
        } catch (e) {
            setStatus('failed');
            console.error(e);
        }
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label="reCAPTCHA checkbox"
            role="checkbox"
            aria-checked={status === 'passed'}
            className="flex items-center border border-gray-300 px-4 py-2 bg-white min-w-[360px] shadow [&:not(:disabled)]:hover:shadow-md transition-shadow"
        >
            <span
                className={`w-6 h-6 border mr-4 ${status === 'passed' ? 'bg-[#E15E00] border-[#E15E00]' : 'border-gray-400'} flex items-center justify-center`}
            >
                {status === 'passed' ? (
                    <svg className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414l2.793 2.793 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                ) : null}
            </span>
            <span className="text-sm font-inter text-[#0F1F08]/70">I'm not a robot</span>
            <div className="ml-auto text-right">
                <div className='flex items-center justify-center w-full'>
                    <img src="/images/contact-us/recaptcha.svg" alt="recaptch" className='w-7 h-7' />
                </div>
                <div className='flex items-center justify-end gap-1 text-[10px] text-gray-600'>
                    <span>Privacy</span>
                    <span>-</span>
                    <span>Terms</span>
                </div>
            </div>
        </button>
    );
}


