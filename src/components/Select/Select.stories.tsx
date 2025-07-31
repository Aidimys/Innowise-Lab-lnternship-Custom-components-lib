import type { Meta, StoryObj } from '@storybook/react';
import Select, { SelectProps } from './Select';

const meta: Meta<SelectProps> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    helperText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SelectProps>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Basic: Story = {
  args: {
    options,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Select option',
    options,
  },
};

export const WithError: Story = {
  args: {
    label: 'Select option',
    options,
    error: true,
    helperText: 'Please select an option',
  },
};
