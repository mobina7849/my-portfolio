import globalTheme from "../../themes/globalTheme"
import { ThemeProvider } from "@mui/material"
import Navbar from "../components/Navbar"
import ContactForm from "../components/ContactForm"


const Contact=()=>{
    return(
        <ThemeProvider theme={globalTheme}>
            <Navbar/>
            <ContactForm/>
        </ThemeProvider>
    )
}

export default Contact