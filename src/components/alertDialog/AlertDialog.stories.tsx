import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {AlertDialogExample} from './AlertDialog';

export default {
    title: 'Example/AlertDialog',
    component: AlertDialogExample,
} as ComponentMeta<typeof AlertDialogExample>;

const Template: ComponentStory<typeof AlertDialogExample> = (args) => <AlertDialogExample {...args} />;

export const DefaultAlertDialog = Template.bind({});
DefaultAlertDialog.args = {
    title: 'Alert Dialog Title',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
};
