import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@components/common';

const meta = {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeWidth: 400,
        iframeHeight: 700,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#212121',
        },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
