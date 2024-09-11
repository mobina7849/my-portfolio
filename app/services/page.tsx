import globalTheme from "../../themes/globalTheme"
import { ThemeProvider } from "@mui/material"
import Navbar from "../components/Navbar"
import ProjectSwiper from "../components/ProjectSwiper"
const Services=()=>{
    return(
        <ThemeProvider theme={globalTheme}>
            <Navbar/>
            <ProjectSwiper/>
        </ThemeProvider>
    )
}

export default Services