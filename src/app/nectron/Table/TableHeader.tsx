import clsx from 'clsx';
import React, { ThHTMLAttributes } from 'react';

export type TableHeaderProps = ThHTMLAttributes<HTMLTableCellElement>;

export default function TableHeader({
    className,
    children,
    ...props
}: TableHeaderProps){
    return (
        <th className={clsx(className, 'w-full font-bold justify-center items-center self-center text-center box-content uppercase')} {...props}>
            {children}
        </th>
    )
} 