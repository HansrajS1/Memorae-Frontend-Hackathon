import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '' }) => {
  const baseStyle = "font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-[#25D366] text-black hover:bg-[#20bd5a] shadow-lg hover:shadow-xl shadow-[#25D366]/30",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
    outline: "bg-transparent border-2 border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;