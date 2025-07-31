import type { Meta, StoryObj } from '@storybook/react';
import TextField, { TextFieldProps } from './TextField';

const meta: Meta<TextFieldProps> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    helperText: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<TextFieldProps>;

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    placeholder: 'Placeholder',
  },
};

export const WithLabel: Story = {
  args: {
    variant: 'outlined',
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export const WithError: Story = {
  args: {
    variant: 'outlined',
    label: 'Label',
    error: true,
    helperText: 'Error message',
  },
};
