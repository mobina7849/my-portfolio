import globalTheme from "../themes/globalTheme"
import { ThemeProvider, Typography } from "@mui/material"

const NotFoundPage=()=>{
    return(
        <ThemeProvider theme={globalTheme}>
            <Typography variant="h2" textAlign={'center'}>
                sorrrry!!!! not found
            </Typography>
   </ThemeProvider>

    )
}

export default NotFoundPage