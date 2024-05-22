import clsx from 'clsx';
import React, { LabelHTMLAttributes } from 'react';

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({
  children,
  className,
  ...props
}: LabelProps) {
  return (
        <label className="flex flex-col relative" {...props} >{children}</label>

  );
}