import globalTheme from "../../themes/globalTheme"
import { ThemeProvider } from "@mui/material"
import Navbar from "../components/Navbar"
import About from "../components/About"


const AboutPage=()=>{
    return(
        <ThemeProvider theme={globalTheme}>
            <Navbar/>
            <About />
        </ThemeProvider>
    )
}

export default AboutPage