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
  [VARIANT.PRIMARY]: "bg-primary-default",
  [VARIANT.SECONDARY]: "bg-secondary-default",
  [VARIANT.DANGER]: "bg-danger-default",
  [VARIANT.WARNING]: "bg-warning-default",
  [VARIANT.SUCCESS]: "bg-success-default"
}

const textColors  = {
  [VARIANT.PRIMARY]: "text-white",
  [VARIANT.SECONDARY]: "text-secondary-dark",
  [VARIANT.DANGER]: "text-danger-dark",
  [VARIANT.WARNING]: "text-warning-dark",
  [VARIANT.SUCCESS]: "text-success-dark"
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