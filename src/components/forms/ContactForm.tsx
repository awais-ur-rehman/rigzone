'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { executeRecaptcha } from '@/lib/recaptcha';
import { useState } from 'react';
import { RecaptchaBox } from '../ui/RecaptchaBox';

const contactFormSchema = z.object({
  message: z.string().min(10, 'Message must be at least 10 characters'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
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
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;
      if (!siteKey) {
        console.warn('reCAPTCHA site key missing. Set NEXT_PUBLIC_RECAPTCHA_SITE_KEY');
      } else {
        const token = await executeRecaptcha('contact_form', siteKey);
        setRecaptchaToken(token);
        console.log('reCAPTCHA token:', token);
      }
      console.log('Form data:', data);
      // Add your API call here
      // await submitContactForm(data);
      reset();
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Section 1: Message */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--oxford-blue)] flex items-center justify-center">
            <span className="text-white font-semibold">1</span>
          </div>
          <h3 className="text-xl font-bold text-[var(--oxford-blue)]">
            Message
          </h3>
        </div>

        <Input
          label="Your Message"
          textarea
          placeholder="Type Your Message"
          {...register('message')}
          error={errors.message?.message}
        />
      </div>

      {/* Section 2: Sender Information */}
      <div className="space-y-4 mt-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[var(--oxford-blue)] flex items-center justify-center">
            <span className="text-white font-semibold">2</span>
          </div>
          <h3 className="text-xl font-bold text-[var(--oxford-blue)]">
            Sender Information
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name*"
            placeholder="Type Your First Name"
            {...register('firstName')}
            error={errors.firstName?.message}
          />
          <Input
            label="Last Name*"
            placeholder="Type Your Last Name"
            {...register('lastName')}
            error={errors.lastName?.message}
          />
        </div>

        <Input
          label="Email*"
          type="email"
          placeholder="Enter your email address"
          {...register('email')}
          error={errors.email?.message}
        />
      </div>

      {/* Row: reCAPTCHA checkbox-style + Submit side-by-side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <RecaptchaBox onVerified={(token) => setRecaptchaToken(token)} />

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
        />
      </div>

    </form>
  );
}
