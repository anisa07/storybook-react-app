"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.LoggedOut = exports.LoggedIn = void 0;
var react_1 = require("react");
var Page_1 = require("./Page");
var HeaderStories = require("./Header.stories");
exports["default"] = {
    title: 'Example/Page',
    component: Page_1.Page
};
var Template = function (args) { return <Page_1.Page {...args}/>; };
exports.LoggedIn = Template.bind({});
exports.LoggedIn.args = __assign({}, HeaderStories.LoggedIn.args);
exports.LoggedOut = Template.bind({});
exports.LoggedOut.args = __assign({}, HeaderStories.LoggedOut.args);
