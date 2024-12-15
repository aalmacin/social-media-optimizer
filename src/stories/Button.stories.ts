import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { fn } from '@storybook/test';

import { Button, type ButtonProps } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {
      description: 'Button click handler',
    },
  },
  args: { onClick: fn<() => void>() },
} as Meta<typeof Button>;


export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    onClick: fn<() => void>()

  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    onClick: fn<() => void>()
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    onClick: fn<() => void>()
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    onClick: fn<() => void>()
  },
};

export const UploadImage: Story = {
  args: {
    primary: false,
    label: "Upload Image Here",
    backgroundColor: "#dde7ec",
    size: "medium",
    onClick: fn(() => console.log('Upload button clicked'))
  }
};

// Interactive example with state
export const WithCounter: StoryObj<typeof Button> = {
  render: (args) => {
    const [count, setCount] = useState(0);
    return React.createElement(Button, {
      ...args,
      label: `Clicked ${count} times`,
      onClick: () => setCount(count + 1)
    });
  }
};