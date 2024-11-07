import { createTheme } from "@mui/material";

const theme = createTheme({
    defaultColorScheme: "light",

    palette: {
        primary: {
            main: '#509cdb',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#152259'
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',

        }
    }
})

export default theme;