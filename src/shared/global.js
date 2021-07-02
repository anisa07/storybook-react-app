"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.GlobalStyle = exports.bodyStyles = exports.fontUrl = void 0;
var styled_components_1 = require("styled-components");
exports.fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';
exports.bodyStyles = styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* Same as before */\n"], ["\n  /* Same as before */\n"])));
exports.GlobalStyle = styled_components_1.createGlobalStyle(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n body {\n   ", "\n }"], ["\n body {\n   ", "\n }"])), exports.bodyStyles);
var templateObject_1, templateObject_2;
