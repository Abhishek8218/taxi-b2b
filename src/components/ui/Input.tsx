import React, { forwardRef } from 'react';



interface InputProps{
  name?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
  }

// Define the Input component
const Input = forwardRef(({name, type = 'text', placeholder, value, onChange, className, ...props }:InputProps, ref:any) => {
  return (
    <input
    name={name}
      type={type}
      placeholder={placeholder}
      value={value} 
      onChange={onChange}
      className={`  px-2 py-[2px] h-7 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 ${className}`} // Apply Tailwind CSS classes here
      ref={ref} // Forward the ref to the input element
      {...props} // Spread any additional props
    />
  );
});

Input.displayName = 'Input'; // Set a display name for debugging

export default Input;
