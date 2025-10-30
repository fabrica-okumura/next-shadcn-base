"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva("text-[var(--color-color-body-text)]", {
  variants: {
    size: {
      xs: "text-[var(--font-size-usage-caption)]",
      sm: "text-[var(--font-size-usage-parts-sm)]",
      base: "text-[var(--font-size-usage-default)]",
      lg: "text-[var(--font-size-usage-parts-md)]",
      xl: "text-[var(--font-size-usage-parts-lg)]",
      "2xl": "text-[var(--font-size-usage-title-sm)]",
    },
    lineHeight: {
      tight: "leading-[1.25]",
      normal: "leading-[1.4]",
      relaxed: "leading-[1.5]",
      loose: "leading-[1.6]",
    },
  },
  defaultVariants: {
    size: "base",
    lineHeight: "normal",
  },
})

type TextElement = React.ComponentRef<"p">
type SlotElement = React.ComponentRef<typeof Slot>

type BaseTextProps = React.ComponentPropsWithoutRef<"p">

type TextProps = BaseTextProps & VariantProps<typeof textVariants> & {
  asChild?: boolean
}

const Text = React.forwardRef<TextElement, TextProps>(
  ({ className, size, lineHeight, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          ref={ref as React.Ref<SlotElement>}
          data-slot="text"
          className={cn(textVariants({ size, lineHeight }), className)}
          {...props}
        />
      )
    }

    return (
      <p
        ref={ref}
        data-slot="text"
        className={cn(textVariants({ size, lineHeight }), className)}
        {...props}
      />
    )
  },
)

Text.displayName = "Text"

export { Text, textVariants }

