import clsx from 'clsx';
import React, { PropsWithChildren, ReactElement } from 'react';
import { VARIANT } from './variant';

type SpanWithChildren = PropsWithChildren<
React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>;

interface SpanProps extends SpanWithChildren {
  className?: string;
  outline?: boolean
  variant: VARIANT;
}

const tagColors = {
  [VARIANT.PRIMARY]: "bg-primary",
  [VARIANT.SECONDARY]: "bg-secondary-light border border-secondary-light",
  [VARIANT.DANGER]: "bg-danger-100",
  [VARIANT.WARNING]: "bg-warning",
  [VARIANT.SUCCESS]: "bg-success"
}

const tagOutline = {
  [VARIANT.PRIMARY]: "border border-primary",
  [VARIANT.SECONDARY]: "border border-secondary",
  [VARIANT.DANGER]: "border border-danger-200",
  [VARIANT.WARNING]: "border border-warning",
  [VARIANT.SUCCESS]: "border border-success"
}

const TagTextColors  = {
  [VARIANT.PRIMARY]: "text-white",
  [VARIANT.SECONDARY]: "text-secondary-dark",
  [VARIANT.DANGER]: "text-danger",
  [VARIANT.WARNING]: "text-warning-dark",
  [VARIANT.SUCCESS]: "text-success-dark"
}

export default function Tag({
  children,
  className,
  outline = false,
  variant,
  ...props
}: SpanProps): ReactElement {

  switch (children) {
    case 'Déployé':
      variant = VARIANT.SUCCESS;
    break;
    case 'En cours':
      variant = VARIANT.WARNING;
    break;
    case 'Arrêté':
      variant = VARIANT.DANGER;
    break;
    case 'En attente':
      variant = VARIANT.SECONDARY;
    break;

  }

  return (
    <span
      className={clsx( outline ? tagOutline[variant]: tagColors[variant], TagTextColors[variant], className, 'flex w-28 gap-2 justify-center items-center text-center font-bold py-1.5 px-2.5 rounded')}
      {...props}
    >
      {children}
    </span>
  );
}