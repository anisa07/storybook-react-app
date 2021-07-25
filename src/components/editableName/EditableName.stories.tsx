import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditableName from './EditableName';
// import { Provider } from 'react-redux';
// import store from '../../lib/editableNameRedux';

export default {
  title: 'Example/EditableName',
  component: EditableName,
  // decorators: [story => <Provider store={store}>{story()}</Provider>],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof EditableName>;

const Template: ComponentStory<typeof EditableName> = (args) => <EditableName {...args} />;

export const Default = Template.bind({});

export const DefaultWithLabel = Template.bind({});
DefaultWithLabel.args = {
  ...Default.args,
  label: 'Test Label'
};
