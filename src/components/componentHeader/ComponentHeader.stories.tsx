import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ComponentHeader from './ComponentHeader';

export default {
  title: 'Example/ComponentHeader',
  component: ComponentHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ComponentHeader>;

const Template: ComponentStory<typeof ComponentHeader> = (args) => <ComponentHeader {...args} />;

export const Default = Template.bind({});

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  ...Default.args,
  label: 'Test Label',
  buttonLabel: 'Delete Item'
};

export const DefaultWithValue = Template.bind({});
DefaultWithValue.args = {
  ...DefaultWithLabel.args,
};
