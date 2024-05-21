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
      className={clsx(className, 'bg-secondary-light border border-secondary text-dark text-sm rounded-lg active:ring-success active:border-success block p-2.5')}
      {...props}
    />
  );
}