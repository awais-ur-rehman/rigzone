import { ReactNode } from 'react';

interface ButtonProps {
  text: string;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'footer' | 'footerSecondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function Button({
  text,
  icon,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 font-[var(--font-motor-oil)] tracking-[1.2px]';

  const variantClasses = {
    primary: 'text-[16px] bg-[#E15E00] border border-[#E15E00] text-[#F6F4EB] hover:bg-[#c95600] focus:ring-[#E15E00] shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-bold',
    secondary: ' text-white hover:bg-[#E15E00] border border-[#F6F4EB] hover:border-transparent font-bold',
    outline: 'border-2 border-[var(--oxford-blue)] text-[var(--oxford-blue)] hover:bg-[var(--oxford-blue)] hover:text-white focus:ring-[var(--oxford-blue)]',
    footer: 'text-[12px] md:text-[16px] bg-[#3E4C52] text-[#F6F4EB] hover:bg-[#3E4C52]/80 focus:ring-[#3E4C52] shadow-[0_4px_4px_rgba(0,0,0,0.25)] whitespace-nowrap',
    footerSecondary: 'text-[12px] md:text-[16px] text-white hover:bg-[#3E4C52] border border-white hover:border-[#3E4C52] hover:text-white font-bold whitespace-nowrap'
  };

  const sizeClasses = {
    sm: 'px-4 py-1',
    md: 'px-6 py-3',
    lg: 'px-8 py-4'
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {text}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
}
