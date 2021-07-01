import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EditableName } from './EditableName';

export default {
  title: 'Example/EditableName',
  component: EditableName,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableName>;

const Template: ComponentStory<typeof EditableName> = (args) => <EditableName {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
};

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  ...Default.args,
  label: 'Test Label'
};

export const DefaultWithValue = Template.bind({});
DefaultWithValue.args = {
  ...DefaultWithLabel.args,
  value: 'Test Value'
};
