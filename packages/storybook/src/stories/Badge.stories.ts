import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import {  Badge} from '../../../react-tailwind-component/src';
const meta = {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    label: 'Badge'
  },
};