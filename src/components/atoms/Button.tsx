// src/components/Button.tsx
import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps {
  variant: 'text' | 'contained' | 'outlined'; // Button variants
  color: 'danger' | 'info' | 'success' | 'warning'; // Predefined color variants
  btnText: string; // Button text
  onClick?: () => void; // Optional click handler
  loading?: boolean; // Loading state
  disabled?: boolean; // Disabled state
  startIcon?: React.ReactNode; // Optional start icon
  endIcon?: React.ReactNode; // Optional end icon
}

const Button: React.FC<ButtonProps> = ({
  variant,
  color,
  btnText,
  onClick,
  loading = false,
  disabled = false,
  startIcon,
  endIcon,
}) => {
  const baseStyles = 'py-2 px-4 rounded transition-opacity flex items-center justify-center';

  // Define styles for different color variants
  const colorStyles = {
    danger: {
      contained: 'bg-red-600 text-white hover:bg-red-700',
      outlined: 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
      text: 'text-red-600 hover:text-red-800',
    },
    info: {
      contained: 'bg-blue-600 text-white hover:bg-blue-700',
      outlined: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white',
      text: 'text-blue-600 hover:text-blue-800',
    },
    success: {
      contained: 'bg-green-600 text-white hover:bg-green-700',
      outlined: 'border border-green-600 text-green-600 hover:bg-green-600 hover:text-white',
      text: 'text-green-600 hover:text-green-800',
    },
    warning: {
      contained: 'bg-yellow-600 text-white hover:bg-yellow-700',
      outlined: 'border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white',
      text: 'text-yellow-600 hover:text-yellow-800',
    },
  };

  const variantStyles = colorStyles[color][variant];

  // Determine the final styles based on loading and disabled states
  const finalStyles = `${baseStyles} ${variantStyles} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  return (
    <button
      className={finalStyles}
      onClick={loading || disabled ? undefined : onClick}
      disabled={disabled}
    >
      {loading ? (
        <span className="flex items-center">
         <AiOutlineLoading3Quarters />
        </span>
      ) : (
        <span className="flex items-center">
          {startIcon && <span className="mr-2">{startIcon}</span>}
          {btnText}
          {endIcon && <span className="ml-2">{endIcon}</span>}
        </span>
      )}
    </button>
  );
};

export default Button;