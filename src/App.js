import Header from "./components/header/header";
import Home from "./components/home/home";
import Project from "./components/projects/projects";
import "./app.css";
import Contact from "./components/contact/contact";
import {  BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import BackToTop from "./components/backToTop/backToTop";
import Skills from "./components/skills/skills";
import Timeline from "./components/timeline/timeline";

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" >
          <Home />
        </Route>

        <Header />

        <Route path='/skills' render={()=>( <Redirect to="/#skills" />)} />
        <Route path='/projects' render={()=>( <Redirect to="/#projects" />)} />
        <Route path='/timeline' render={()=>( <Redirect to="/#timeline" />)} />
        <Route path='/contact' render={()=>( <Redirect to="/#contact" />)} />

        <section id="skills">
          <Skills id="skills"/>
        </section>
                
        <section id="projects">
          <Project id="projects"/>
        </section>
      
        <section id="timeline">
          <Timeline id="timeline"/>
        </section>
    
        <section id="contact">
          <Contact id="contact" />
        </section>


      </Router>

      <BackToTop /> 
      
    </div>
  );
}

export default App;
