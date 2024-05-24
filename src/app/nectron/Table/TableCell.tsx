import clsx from 'clsx';
import React, { TdHTMLAttributes } from 'react';

export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>;

export default function TableCell({
    className,
    children,
    ...props
}: TableCellProps){
    return (
        <div className='flex flex-row flex-nowrap items-center justify-center w-full box-content'>
            <td className={clsx(className, 'flex flex-row flex-nowrap gap-4')} {...props}>
                {children}
            </td>
        </div>
    )
} 