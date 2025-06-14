import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}) => {
  // Base styles
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-merriweather text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none';

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }[size];

  // Variant styles
  const variantStyles = {
    primary:
      'bg-[#942FFF] text-white hover:bg-[#7C27D9] active:bg-[#6B20C0] focus-visible:ring-[#942FFF]',
    outline:
      'border border-[#942FFF] text-white hover:bg-[#942FFF]/10 active:bg-[#942FFF]/20 focus-visible:ring-[#942FFF]',
  }[variant];

  // Combine styles
  const styles = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  // Render as link or button
  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
