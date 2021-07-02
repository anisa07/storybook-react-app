module.exports = {
    stories: ['../src/components/**/*.stories.tsx'],
    refs: {
        'design-system': {
            title: 'My design system',
            //👇 The url provided by Chromatic when it was deployed
            url: 'https://www.chromatic.com/manage?appId=60de331f3e7bce003b21bfa4&branch=main',
        },
    },
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        "@storybook/addon-a11y",
        "storybook-addon-material-ui"
    ]
}
