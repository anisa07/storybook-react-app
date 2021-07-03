import { withMuiTheme } from "@harelpls/storybook-addon-materialui";
import {theme} from "./theme";
import '@fontsource/roboto';
import {GlobalStyle} from '../src/shared/global';

export const decorators = [
    withMuiTheme({
        CustomLightTheme: theme
    }),
    Story => (
        <>
            <GlobalStyle/>
            <Story/>
        </>
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
