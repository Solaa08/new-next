import clsx from 'clsx';
import React, { LabelHTMLAttributes } from 'react';

export type OnTopProps = LabelHTMLAttributes<HTMLLabelElement>;

export default function OnTop({
  children,
  className,
  ...props
}: OnTopProps) {
  return (
        <label className="text-secondary-dark absolute -mt-3 bg-white text-xs ml-4 box-content text-center h-4 flex p-1" {...props} >{children}</label>

  );
}