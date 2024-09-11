
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material";
import globalTheme from "../themes/globalTheme";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project1 from "./components/Project1";

export default function Home() {
  return (
    <ThemeProvider theme={globalTheme}>
      <Navbar />
      <Hero />
      <About />
      <Project1/>
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}
