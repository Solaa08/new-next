import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

export type ContentProps = HTMLAttributes<HTMLDivElement>;

export default function Content({
  children,
  className,
  ...props
}: ContentProps) {
  return (
        <div className="flex justify-center content-center" {...props} >
            {children}
        </div>
  );
}