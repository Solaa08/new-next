import clsx from 'clsx';
import React, { TdHTMLAttributes } from 'react';

export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;

export default function TableCell({
    className,
    children,
    ...props
}: TableCellProps){
    return (
        <td className={clsx(className, 'flex-row flex-nowrap items-center justify-center w-full box-content')} {...props}>
            {children}
        </td>
    )
} 