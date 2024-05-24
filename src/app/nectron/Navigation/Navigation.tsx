import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

export type NavigationProps = HTMLAttributes<HTMLDivElement>;

export default function Navigation({
  children,
  className,
  ...props
}: NavigationProps) {
  return (
        <div className="flex relative bg-white py-8 px-16 content-start flex-col gap-5 box-content" {...props} >
            {children}
        </div>
  );
}