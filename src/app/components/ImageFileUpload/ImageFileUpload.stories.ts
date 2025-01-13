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
    onFileUpload: fn((file: File) => alert(`File uploaded: ${file.name}`)),
    onInvalidFileType: fn((message: string) => alert(message)),
  },
};

export const InteractiveExample: Story = {
  render: (args) => {
    return React.createElement(ImageFileUpload, {
      ...args,
      onFileUpload: fn((file: File) => console.log(`File uploaded: ${file.name}`)),
      onInvalidFileType: fn((message: string) => console.error(message)),
    });
  },
};