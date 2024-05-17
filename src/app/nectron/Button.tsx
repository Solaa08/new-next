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
  [VARIANT.WARNING]: "bg-warning",
  [VARIANT.SUCCESS]: "bg-success"
}

const textColors  = {
  [VARIANT.PRIMARY]: "text-primary-text",
  [VARIANT.SECONDARY]: "text-secondary-text",
  [VARIANT.DANGER]: "text-danger-text",
  [VARIANT.WARNING]: "text-warning-text",
  [VARIANT.SUCCESS]: "text-success-text"
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