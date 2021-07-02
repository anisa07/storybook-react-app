"use strict";
exports.__esModule = true;
exports.LoggedOut = exports.LoggedIn = void 0;
var react_1 = require("react");
var Header_1 = require("./Header");
exports["default"] = {
    title: 'Example/Header',
    component: Header_1.Header
};
var Template = function (args) { return <Header_1.Header {...args}/>; };
exports.LoggedIn = Template.bind({});
exports.LoggedIn.args = {
    user: {}
};
exports.LoggedOut = Template.bind({});
exports.LoggedOut.args = {};
