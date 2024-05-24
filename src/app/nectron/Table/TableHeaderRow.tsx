import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

export type TableHeaderRowProps = HTMLAttributes<HTMLTableRowElement>;

export default function TableHeaderRow({
    className,
    children,
    ...props
}: TableHeaderRowProps){
    return (
        <tr className={clsx(className, 'flex justify-around h-[49px] px-2 py-4 border-b border-secondary-light text-center items-center')} {...props}>
            {children}
        </tr>
    )
} 