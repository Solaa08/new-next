import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

export type SidebarProps = HTMLAttributes<HTMLDivElement>;

export default function Sidebar({
  children,
  className,
  ...props
}: SidebarProps) {
  return (
        <div className="" {...props} >
            {children}
        </div>
  );
}