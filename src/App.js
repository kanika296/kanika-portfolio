import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import {Experiences} from "./components/Experiences.js";
import { Achievements } from './components/Achievements.js';

import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experiences/>
      <Skills />
      <Projects />
      <Achievements/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
