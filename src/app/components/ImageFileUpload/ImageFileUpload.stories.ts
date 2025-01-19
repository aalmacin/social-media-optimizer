import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fn } from '@storybook/test';
import ImageFileUpload from './ImageFileUpload';

const meta = {
  title: 'Components/ImageFileUpload',
  component: ImageFileUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof ImageFileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onFileChange: fn((file: File) => alert(`File added: ${file.name}`)),
    onInvalidFileUpload: fn((message: string) => alert(message)),
  },
};

export const InteractiveExample: Story = {
  render: (args) => {
    return React.createElement(ImageFileUpload, {
      ...args,
      onFileChange: fn((file: File) => alert(`File added: ${file.name}`)),
      onInvalidFileUpload: fn((message: string) => alert(message)),
    });
  },
};