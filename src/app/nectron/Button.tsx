import clsx from 'clsx';
import React, { PropsWithChildren, ReactElement } from 'react';
import { VARIANT } from './variant';

type ButtonWithChildren = PropsWithChildren<
React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

interface ButtonProps extends ButtonWithChildren {
  className?: string;
  variant: VARIANT;
}

const buttonColors = {
  [VARIANT.PRIMARY]: "bg-blue-500",
  [VARIANT.SECONDARY]: "bg-gray-200",
  [VARIANT.DANGER]: "bg-red-200",
  [VARIANT.WARNING]: "bg-orange-100",
  [VARIANT.SUCCESS]: "bg-green-100"
}

const textColors  = {
  [VARIANT.PRIMARY]: "text-white",
  [VARIANT.SECONDARY]: "text-gray-400",
  [VARIANT.DANGER]: "text-red-500",
  [VARIANT.WARNING]: "text-orange-300",
  [VARIANT.SUCCESS]: "text-green-500"
}

export default function Button({
  children,
  className,
  variant = VARIANT.PRIMARY,
  ...props
}: ButtonProps): ReactElement {

  return (
    <button
      className={clsx(buttonColors[variant], textColors[variant], className, 'font-bold py-2 px-4 rounded')}
      {...props}
    >
      {children}
    </button>
  );
}