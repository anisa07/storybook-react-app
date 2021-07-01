import {muiTheme} from 'storybook-addon-material-ui'
import '@fontsource/roboto';
import {GlobalStyle} from '../src/shared/global';

export const decorators = [
    muiTheme(),
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
