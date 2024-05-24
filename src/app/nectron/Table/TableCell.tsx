import clsx from 'clsx';
import React, { TdHTMLAttributes } from 'react';

export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;

export default function TableCell({
    className,
    children,
    ...props
}: TableCellProps){
    return (
            <td className={clsx(className, 'flex flex-row flex-nowrap gap-4 font-semibold text-sm justify-start')} {...props}>
                {children}
            </td>
    )
} 