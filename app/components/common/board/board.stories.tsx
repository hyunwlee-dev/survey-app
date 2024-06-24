import type { Meta, StoryObj } from '@storybook/react';
import { Board } from '@components/common';

const meta = {
  title: 'Components/Board',
  component: Board,
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
} satisfies Meta<typeof Board>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headingText: '설문조사',
    subText: '설문조사를 진행해주세요.\n감사합니다.',
  },
};
