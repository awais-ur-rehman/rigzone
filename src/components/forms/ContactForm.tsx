'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { executeRecaptcha } from '@/lib/recaptcha';
import { useEffect, useState } from 'react';
import { RecaptchaBox } from '../ui/RecaptchaBox';

const contactFormSchema = z.object({
  message: z.string().min(10, 'Message must be at least 10 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

type ContactFormProps = {
  variant?: 'default' | 'about';
};

export function ContactForm({ variant = 'default' }: ContactFormProps) {
  const isAboutVariant = variant === 'about';
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Get reCAPTCHA token if available
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;
      let token = recaptchaToken;

      if (!token && siteKey) {
        try {
          token = await executeRecaptcha('contact_form', siteKey);
          setRecaptchaToken(token);
        } catch (recaptchaError) {
          console.warn('reCAPTCHA error:', recaptchaError);
        }
      }

      // Call the PHP endpoint to send email
      const response = await fetch('/contact-send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken: token,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to send message');
      }

      reset();
      setRecaptchaToken(null);
      setIsRecaptchaVerified(false);
      setToast({ type: 'success', message: 'Message received! Our team will reach out shortly.' });
    } catch (error) {
      console.error('Error submitting form:', error);
      const message =
        error instanceof Error ? error.message : 'Failed to send message. Please try again.';
      setToast({ type: 'error', message });
    }
  };

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeout = setTimeout(() => {
      setToast(null);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [toast]);

  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="pointer-events-none fixed inset-x-0 top-6 z-[9999] flex justify-center px-4 sm:justify-end"
      >
        {toast && (
          <div
            className={`pointer-events-auto flex max-w-sm items-start gap-3 rounded-xl border border-[var(--oxford-blue)]/10 bg-white px-5 py-4 shadow-[0_14px_40px_rgba(15,25,55,0.15)] transition-all duration-300 ${toast.type === 'success' ? 'text-[var(--oxford-blue)]' : 'text-red-600'
              }`}
          >
            <div className="flex-1 text-sm font-medium leading-relaxed">{toast.message}</div>
            <button
              type="button"
              onClick={() => setToast(null)}
              className="ml-2 shrink-0 text-xs font-semibold uppercase tracking-wide text-[var(--oxford-blue)] cursor-pointer"
            >
              Close
            </button>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Section 1: Message */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isAboutVariant ? 'bg-[#E15E00]' : 'bg-[var(--oxford-blue)]'
              }`}>
              <span className="text-white font-semibold">1</span>
            </div>
            <h3 className={`text-xl font-bold ${isAboutVariant ? 'text-[#FCFDFE]' : 'text-[var(--oxford-blue)]'
              }`}>
              Message
            </h3>
          </div>

          <Input
            label="Your Message"
            textarea
            placeholder="Type Your Message"
            variant={variant}
            {...register('message')}
            error={errors.message?.message}
          />
        </div>

        {/* Section 2: Sender Information */}
        <div className="space-y-4 mt-16">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isAboutVariant ? 'bg-[#E15E00]' : 'bg-[var(--oxford-blue)]'
              }`}>
              <span className="text-white font-semibold">2</span>
            </div>
            <h3 className={`text-xl font-bold ${isAboutVariant ? 'text-[#FCFDFE]' : 'text-[var(--oxford-blue)]'
              }`}>
              Sender Information
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name*"
              placeholder="Type Your First Name"
              variant={variant}
              {...register('firstName')}
              error={errors.firstName?.message}
            />
            <Input
              label="Last Name*"
              placeholder="Type Your Last Name"
              variant={variant}
              {...register('lastName')}
              error={errors.lastName?.message}
            />
          </div>

          <Input
            label="Email*"
            type="email"
            placeholder="Enter your email address"
            variant={variant}
            {...register('email')}
            error={errors.email?.message}
          />
        </div>

        {/* Row: reCAPTCHA checkbox-style + Submit side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <RecaptchaBox
            onVerified={(token) => {
              setRecaptchaToken(token);
              setIsRecaptchaVerified(true);
            }}
            onFailed={() => {
              // If reCAPTCHA fails (e.g., API limit hit), allow form submission anyway
              setIsRecaptchaVerified(true);
            }}
          />

          <Button
            text="Submit"
            icon={
              <img
                src="/icons/navigation/arrow.svg"
                alt="Arrow"
                className="w-3 h-3"
              />
            }
            variant="primary"
            size="lg"
            className="w-full"
            onClick={handleSubmit(onSubmit)}
            disabled={!isRecaptchaVerified}
          />
        </div>

      </form>
    </>
  );
}
