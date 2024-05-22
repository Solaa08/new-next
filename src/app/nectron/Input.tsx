import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  children,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(className, 'bg-transparent border border-secondary text-dark text-sm rounded-md active:ring-success active:border-success block p-3 h-14')}
      {...props}
    />
  );
}