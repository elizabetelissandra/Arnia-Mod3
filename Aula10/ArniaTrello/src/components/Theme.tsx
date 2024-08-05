import { createTheme } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    primary: {
      light: '#ffecb3',
      main: '#ffb74d',
      dark: '#ff9800',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff5252',
      main: '#ff1744',
      dark: '#d50000',
      contrastText: '#000',
    },
  },
});