import AboutMe from './components/AboutMe/AboutMe';
import Certificates from './components/Certificates/Certificates';
import ConnectWithMe from './components/ConnectWithMe/ConnectWithMe';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import TeamDevelopment from './components/TeamDevelopment/TeamDevelopment';

function App() {

  return (
      <div className="page">
        <Header />
        <AboutMe />
        <Projects />
        <TeamDevelopment />
        <Certificates />
        <Skills />
        <ConnectWithMe />
      </div>
  )
}

export default App
