import clsx from 'clsx';
import React, { FormHTMLAttributes } from 'react';

export type FormProps = FormHTMLAttributes<HTMLFormElement>;

export default function Form({
  children,
  className,
  action,
  ...props
}: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form className={clsx(className, 'w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4')}
    {...props}
    action={action}>
    </form>
  );
}