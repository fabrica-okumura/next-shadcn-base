import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-colors disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-color-usage-button-primary)] text-white shadow-xs hover:bg-[var(--color-color-usage-button-primary-hover)] disabled:bg-[var(--color-color-usage-button-disabled)] disabled:text-white',
        accent:
          'bg-[var(--color-color-usage-button-accent)] text-white shadow-xs hover:bg-[var(--color-color-usage-button-accent-hover)] disabled:bg-[var(--color-color-usage-button-disabled)] disabled:text-white',
        neutral:
          'border border-[var(--color-color-primitive-neutral-500)] bg-white text-[var(--color-color-body-text)] hover:bg-[var(--color-color-primitive-neutral-200)] disabled:bg-[var(--color-color-primitive-neutral-050)] disabled:border-[var(--color-color-usage-border)] disabled:text-[var(--color-color-primitive-neutral-500)]',
        danger:
          'bg-[var(--color-color-usage-button-destructive)] text-white shadow-xs hover:bg-[var(--color-color-usage-button-destructive-hover)] disabled:bg-[var(--color-color-usage-button-disabled)] disabled:text-white',
        link:
          'text-[var(--color-color-text-link)] underline-offset-4 hover:underline disabled:text-[var(--color-color-primitive-neutral-500)] disabled:no-underline',
      },
      size: {
        md: 'h-10 px-6 rounded-[6px]',
        sm: 'h-[26px] px-2 text-xs gap-1 rounded-[4px] [&_svg]:size-4',
        icon: 'h-10 w-10 rounded-[6px] [&_svg]:size-5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
