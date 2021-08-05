import {createMuiTheme} from "@material-ui/core/styles";
import {error, info, primary, secondary, warning} from "./lightColors";

export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Coming Soon',
        ].join(','),
    },
    palette: {
        primary: {
            main: primary,
        },
        warning: {
            main: warning,
        },
        secondary: {
            main: secondary,
        },
        error: {
            main: error
        },
        info: {
            main: info
        },
        type: "light",
    },
});
