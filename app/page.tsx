
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@mui/material";
import globalTheme from "../themes/globalTheme";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectTabs from "./components/ProjectTabs";
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
