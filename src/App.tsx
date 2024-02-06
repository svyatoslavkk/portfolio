import { useRef } from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Certificates from './components/Certificates/Certificates';
import ConnectWithMe from './components/ConnectWithMe/ConnectWithMe';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import TeamDevelopment from './components/TeamDevelopment/TeamDevelopment';
import ColorOverlay from './components/ColorOverlay/ColorOverlay';

function App() {
  const skillsRef = useRef(null);
  const connectWithMeRef = useRef(null);
  const certificatesRef = useRef(null);
  const projectsRef = useRef(null);
  const teamDevRef = useRef(null);

  return (
      <div className="page">
        <Header 
          skillsRef={skillsRef} 
          connectWithMeRef={connectWithMeRef} 
          certificatesRef={certificatesRef} 
          projectsRef={projectsRef}
        />
        <AboutMe />
        <Projects innerRef={projectsRef} />
        <TeamDevelopment innerRef={teamDevRef} />
        <Certificates innerRef={certificatesRef} />
        <Skills innerRef={skillsRef} />
        <ConnectWithMe innerRef={connectWithMeRef} />
        <ColorOverlay />
      </div>
  )
}

export default App
