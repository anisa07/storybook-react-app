import {ThemeProvider} from "@material-ui/core/styles";
import { createGlobalStyle, css } from 'styled-components';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Coming+Soon&display=swap';
// @import url('https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap');
export const bodyStyles = css`
  /* Same as before */
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;

export const themeProvider = ThemeProvider;
