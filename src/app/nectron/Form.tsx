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
    <form className={clsx(className, 'bg-white rounded-xl p-12 gap-8 flex flex-col')}
    {...props}
    action={action}>
        {children}
    </form>
  );
}