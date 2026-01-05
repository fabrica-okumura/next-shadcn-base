import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { expect, fn, userEvent, within } from "storybook/test"

import { Button } from "./button"

type ButtonProps = React.ComponentProps<typeof Button>

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "accent", "neutral", "destructive"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "icon", "icon-sm"],
    },
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "default",
    size: "default",
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: /primary/i })

    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalledTimes(1)
  },
}

export const Accent: Story = {
  args: {
    children: "Accent",
    variant: "accent",
    size: "default",
  },
}

export const Neutral: Story = {
  args: {
    children: "Neutral",
    variant: "neutral",
    size: "default",
  },
}

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
    size: "default",
  },
}

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
}

export const Icon: Story = {
  args: {
    "aria-label": "Search",
    size: "icon",
    children: "🔍",
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
    onClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: /disabled/i })

    await expect(button).toBeDisabled()
    await userEvent.click(button, { pointerEventsCheck: 0 })
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}

export const Focusable: Story = {
  args: {
    children: "Focusable",
    variant: "neutral",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole("button", { name: /focusable/i })

    await userEvent.tab()
    await expect(button).toHaveFocus()
  },
}
