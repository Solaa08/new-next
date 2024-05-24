import clsx from 'clsx';
import React, { PropsWithChildren, ReactElement } from 'react';
import { VARIANT } from './variant';

type ButtonWithChildren = PropsWithChildren<
React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

interface ButtonIconProps extends ButtonWithChildren {
  className?: string;
  outline?: boolean
  variant: VARIANT;
}

const buttonColors = {
  [VARIANT.PRIMARY]: "bg-primary",
  [VARIANT.SECONDARY]: "bg-secondary-light border border-secondary-light",
  [VARIANT.DANGER]: "bg-danger",
  [VARIANT.WARNING]: "bg-warning",
  [VARIANT.SUCCESS]: "bg-success"
}

const buttonOutline = {
  [VARIANT.PRIMARY]: "border border-primary",
  [VARIANT.SECONDARY]: "border border-secondary",
  [VARIANT.DANGER]: "border border-danger-200",
  [VARIANT.WARNING]: "border border-warning",
  [VARIANT.SUCCESS]: "border border-success"
}

const textColors  = {
  [VARIANT.PRIMARY]: "text-white",
  [VARIANT.SECONDARY]: "text-secondary-dark",
  [VARIANT.DANGER]: "text-danger",
  [VARIANT.WARNING]: "text-warning-dark",
  [VARIANT.SUCCESS]: "text-success-dark"
}

export default function ButtonIcon({
  children,
  className,
  outline = false,
  variant = VARIANT.PRIMARY,
  ...props
}: ButtonIconProps): ReactElement {

  return (
    <button
      className={clsx( outline ? buttonOutline[variant]: buttonColors[variant], textColors[variant], className, 'w-[46px] h-[38px] flex gap-2 justify-center items-center py-2 px-3.5 text-center font-bold rounded uppercase')}
      {...props}
    >
      {children}
    </button>
  );
}