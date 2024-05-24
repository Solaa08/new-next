import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;

export default function TableBody({
    className,
    children,
    ...props
}: TableHeaderProps){
    return (
        <tbody className={clsx(className, 'w-full box-content')} {...props}>
            {children}
        </tbody>
    )
} 