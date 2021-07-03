import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#073b4c",
        },
        warning: {
            main: "#ef476f",
        },
        secondary: {
            main: "#118ab2",
        },
        error: {
            main: '#9b2226'
        },
        info: {
            main: "#06d6a0"
        },
        type: "light",
    },
});

export const themeProvider = (props: any) => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
