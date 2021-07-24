import { withMuiTheme } from "@harelpls/storybook-addon-materialui";
import {theme} from "../src/shared/theme";
import '@fontsource/roboto';
import {GlobalStyle} from '../src/shared/global';
import {Provider} from "react-redux";
import React from "react";
import store from '../src/lib/redux';

export const decorators = [
    withMuiTheme({
        CustomLightTheme: theme
    }),
    Story => (
        <Provider store={store}>
            <GlobalStyle/>
            <Story/>
        </Provider>
    ),
];

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    a11y: {
        element: '#root',
        manual: false,
    },
}
