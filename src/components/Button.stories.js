"use strict";
exports.__esModule = true;
exports.LongLabel = exports.Small = exports.Large = exports.Secondary = exports.Primary = void 0;
var react_1 = require("react");
var Button_1 = require("./Button");
exports["default"] = {
    title: 'Example/Button',
    component: Button_1.Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
};
var Template = function (args) { return <Button_1.Button {...args}/>; };
exports.Primary = Template.bind({});
exports.Primary.args = {
    primary: true,
    label: 'Primary'
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Button'
};
exports.Large = Template.bind({});
exports.Large.args = {
    size: 'large',
    label: 'Button'
};
exports.Small = Template.bind({});
exports.Small.args = {
    size: 'small',
    label: 'Button'
};
exports.LongLabel = Template.bind({});
exports.LongLabel.args = {
    label: 'Long Long Long Long Long Long Label Button'
};
