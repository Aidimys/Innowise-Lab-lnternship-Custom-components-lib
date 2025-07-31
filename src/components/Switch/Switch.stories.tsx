import type { Meta, StoryObj } from '@storybook/react';
import Switch, { SwitchProps } from './Switch';

const meta: Meta<SwitchProps> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SwitchProps>;

export const Basic: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Airplane mode',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled switch',
  },
};
