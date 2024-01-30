//import './App.css'
import styles from "./App.module.css";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Project";
import { Blogs } from "./components/Blogs/Blogs";

function App() {
  return (
  <div className={styles.App}>
    <Navbar />
    <Hero />
  
    <Experience />
    <Projects />
    <Blogs />
    <Contact />
  </div>
  );
};

export default App;
