import { createTheme } from "@mui/material";

const theme = createTheme({
    defaultColorScheme: "light",

    palette: {
        primary: {
            main: '#509cdb',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#152259',
            "100": '#DCDCDC',
            contrastText: 'black'
        },
        background: {
            default: '#ffffff',
            paper: '#ffffff',
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    borderRadius: 12
                }
            }
        }
    }
})

export default theme;