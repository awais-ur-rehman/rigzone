import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  textarea?: boolean;
}

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  ({ label, error, textarea = false, className = '', ...props }, ref) => {
    const baseClasses =
      'w-full px-4 py-3 border focus:outline-none focus:ring-2 transition-colors duration-200';
    const errorClasses = error
      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
      : 'border-gray-300 focus:ring-[var(--oxford-blue)] focus:border-[var(--oxford-blue)]';
    const textareaClasses = textarea ? 'min-h-32 resize-none' : '';

    const inputClasses = `${baseClasses} ${errorClasses} ${textareaClasses} ${className}`;

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-[var(--davys-gray)] mb-2">
            {label}
          </label>
        )}
        {textarea ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={inputClasses}
            {...(props as any)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={inputClasses}
            {...props}
          />
        )}
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
