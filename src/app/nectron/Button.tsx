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
  [VARIANT.PRIMARY]: "bg-primary",
  [VARIANT.SECONDARY]: "bg-secondary",
  [VARIANT.DANGER]: "bg-danger",
  [VARIANT.WARNING]: "bg-warnin",
  [VARIANT.SUCCESS]: "bg-success"
}

const textColors  = {
  [VARIANT.PRIMARY]: "bg-primary",
  [VARIANT.SECONDARY]: "bg-secondary",
  [VARIANT.DANGER]: "bg-danger",
  [VARIANT.WARNING]: "bg-warnin",
  [VARIANT.SUCCESS]: "bg-success"
}

export default function Button({
  children,
  className,
  variant = VARIANT.PRIMARY,
  ...props
}: ButtonProps): ReactElement {

  return (
    <button
      className={clsx(buttonColors[variant], textColors[variant], className, 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded')}
      {...props}
    >
      {children}
    </button>
  );
}