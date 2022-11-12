import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

const white = '#FFFFFF';
const black = '#000000';
const primary = "#536DFE";
const secondary = "#FF5C93";

// A custom theme for this app
const theme = createTheme({
  palette: {
    black,
    white,
    primary: {
      contrastText: white,
      main: primary,
      light: primary[100],
      dark: primary[900],
    },
    secondary: {
      main: secondary,
      light: secondary[100],
      dark: secondary[900],
      contrastText: white,
    },
    success: {
      contrastText: white,
      dark: colors.green[900],
      main: colors.green[600],
      light: colors.green[400]
    },
    info: {
      contrastText: white,
      dark: colors.blue[900],
      main: colors.blue[600],
      light: colors.blue[400]
    },
    warning: {
      contrastText: white,
      dark: colors.orange[900],
      main: colors.orange[600],
      light: colors.orange[400]
    },
    error: {
      contrastText: white,
      dark: colors.red[900],
      main: colors.red[600],
      light: colors.red[400]
    },
    text: {
      primary: colors.blueGrey[800],
      secondary: colors.blueGrey[600],
      link: colors.blueGrey[800]
    },
    background: {
      default: '#F6F7FF',
      paper: white
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[200]
  },
});

export default theme;