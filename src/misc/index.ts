import type * as React from 'react';

export function cx(...strings: any[]): string {
  return strings.filter(Boolean).join(' ');
}

export type SvgProp = React.SVGAttributes<SVGElement>;
export type BaseCardProp = React.HTMLAttributes<HTMLDivElement>;
