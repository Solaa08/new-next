import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;

export default function TableHead({
    className,
    children,
    ...props
}: TableHeaderProps){
    return (
        <thead className={clsx(className, 'w-full font-bold box-content uppercase')} {...props}>
            {children}
        </thead>
    )
} 