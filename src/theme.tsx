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
            '200': '#4F4F4F',
            '300': '#ebebed',
            contrastText: '#4f4f4f'
        },
        background: {
            default: '#fcfafa',
            paper: '#ffffff',
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    borderRadius: 5
                }
            }
        }
    }
})

export default theme;