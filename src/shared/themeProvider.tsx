import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from "./theme";

export const themeProvider = (props: any) => <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
