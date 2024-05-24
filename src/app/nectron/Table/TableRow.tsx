import clsx from 'clsx';
import React, { HTMLAttributes } from 'react';

export type TableRowProps = HTMLAttributes<HTMLTableRowElement>;

export default function TableRow({
    className,
    children,
    ...props
}: TableRowProps){
    return (
        <tr className={clsx(className, 'flex justify-around px-2 py-8 border-b border-secondary-light text-center items-center')} {...props}>
            {children}
        </tr>
    )
} 