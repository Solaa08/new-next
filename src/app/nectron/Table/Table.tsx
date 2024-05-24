import clsx from 'clsx';
import React, { TableHTMLAttributes } from 'react';

export type TableProps = TableHTMLAttributes<HTMLTableElement>;

export default function Table({
    className,
    children,
    ...props
}: TableProps){
    return (
        <table className={clsx(className, 'bg-white text-dark flex gap-1 flex-col w-[1000px] rounded-xl box-content')} {...props}>
            {children}
        </table>
    )
} 