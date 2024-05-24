import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

export type WrapperProps = HTMLAttributes<HTMLDivElement>;

export default function Wrapper({
  children,
  className,
  ...props
}: WrapperProps) {
  return (
        <div className="flex justify-between flex-row" {...props} >
            {children}
        </div>
  );
}