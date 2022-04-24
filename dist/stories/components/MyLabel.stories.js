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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
// Name of the component to render
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        // Modify the type of the input (text, boolean, select, radio, color, etc.)
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        backgroundColor: { control: 'color' }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
// Stories for the component
exports.Basic = Template.bind({});
// Set props for this story
exports.Basic.args = {
    label: 'My Label Custom Basic'
};
exports.AllCaps = Template.bind({});
// Set props for this story
exports.AllCaps.args = {
    label: 'My Label Custom AllCaps',
    allCaps: true,
    size: 'normal'
};
exports.Secondary = Template.bind({});
// Set props for this story
exports.Secondary.args = {
    label: 'My Label Custom Secondary',
    color: 'secondary',
    size: 'h2'
};
exports.Tertiary = Template.bind({});
// Set props for this story
exports.Tertiary.args = {
    label: 'My Label Custom Tertiary',
    color: 'tertiary',
    size: 'h3',
    backgroundColor: '#000000'
};
