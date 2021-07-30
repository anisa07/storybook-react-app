import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Column from './Column';

export default {
    title: 'Example/Column',
    component: Column,
} as ComponentMeta<typeof Column>;

const Template: ComponentStory<typeof Column> = (args) => <Column {...args} />;

export const Default = Template.bind({});
Default.args = {
}
