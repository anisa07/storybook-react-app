import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Columns from './Columns';

export default {
    title: 'Example/Columns',
    component: Columns,
} as ComponentMeta<typeof Columns>;

const Template: ComponentStory<typeof Columns> = (args) => <Columns {...args} />;

export const Default = Template.bind({});
Default.args = {}
