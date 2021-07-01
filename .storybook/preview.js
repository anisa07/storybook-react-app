import { muiTheme } from 'storybook-addon-material-ui'
import '@fontsource/roboto';

export const decorators = [
  muiTheme()
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
