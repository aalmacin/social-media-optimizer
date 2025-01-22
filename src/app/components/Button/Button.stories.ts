import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import React, { useState } from 'react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'medium',
    label: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    label: 'Secondary Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'medium',
    label: 'Success Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'medium',
    label: 'Warning Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'medium',
    label: 'Danger Button',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    label: 'Large Button',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    label: 'Small Button',
  },
};


export const InteractiveClick: Story = {
  render: (args) => {
    const [clickCount, setClickCount] = useState(0);

    return React.createElement(Button, {
      ...args,
      label: `Clicked ${clickCount} times`,
      onClick: () => setClickCount(clickCount + 1),
    });
  },
  args: {
    variant: 'primary',
    size: 'medium',
  },
};