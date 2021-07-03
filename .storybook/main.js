module.exports = {
    stories: ['../src/components/**/*.stories.tsx'],
    refs: {
        'design-system': {
            title: 'My design system',
            url: 'https://www.chromatic.com/manage?appId=60de331f3e7bce003b21bfa4&branch=main',
        },
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        "@storybook/addon-a11y",
        '@harelpls/storybook-addon-materialui'
    ]
}
