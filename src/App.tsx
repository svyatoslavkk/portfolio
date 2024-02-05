import AboutMe from './components/AboutMe/AboutMe';
import Certificates from './components/Certificates/Certificates';
import ConnectWithMe from './components/ConnectWithMe/ConnectWithMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {

  return (
    <div className="container">
      <AboutMe />
      <Projects />
      <Certificates />
      <Skills />
      <ConnectWithMe />
    </div>
  )
}

export default App
