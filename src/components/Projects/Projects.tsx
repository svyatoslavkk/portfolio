import { useState, useEffect, RefObject } from 'react';
import { useSpring, animated } from 'react-spring';
import { projects } from '../../constants/constants';
import { IProject } from '../../types/types';

export default function Projects({ innerRef }: { innerRef: RefObject<HTMLDivElement> }) {
  const [isVisible, setIsVisible] = useState(false);

  const fadeInAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100px)',
    config: { tension: 300, friction: 50 },
  });

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, [isVisible, innerRef]);

  const gitHub = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png";
  
  return (
    <animated.div
      ref={innerRef}
      style={{
        ...fadeInAnimation,
    }}
    >
    <section className="default-section">
      <h2 className="title">Projects I've<br /> Worked on</h2>
      {projects.map((el: IProject) => (
        <div className="card" style={{backgroundColor: el.bgColor }}>
          <div className="album-image-block">
            <img src={el.screenshots} className="album-image" alt={el.name} />
          </div>
          <div className="card-info">
            <h3 className="mid-title">{el.name}</h3>
            <div className="tech-content">
              <div className="column-content">
                <p className="pre-title">Worked on</p>
                <div className="flex-wrap-list">
                  {el.workedOn.map((workItem) => (
                    <span className="check">
                      <span className="light-text">{workItem}</span>
                    </span>
                  ))} 
                </div>
              </div>
              <div className="column-content">
                <p className="pre-title">Technologies I have used</p>
                <div className="flex-wrap-list">
                  {el.techs.map((tech) => (
                    <div className="tech-item">
                      <img src={tech.icon} className="tiny-icon-image" alt={tech.name} />
                      <span className="dark-text">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a href={el.codeLink} className="primary-btn" target="_blank" rel="noopener noreferrer">
              <img src={gitHub} className="mid-icon-image" alt="GitHub" />
              <span className="light-text">Go to Github</span>
            </a>
          </div>
        </div>
      ))}
      <div className="flex-content">
        <a href="https://github.com/svyatoslavkk" className="yellow-btn" target="_blank" rel="noopener noreferrer">
          <img src={gitHub} className="mid-icon-image" alt="GitHub" />
          <span className="light-text">See Github</span>
        </a>
      </div>
    </section>
    </animated.div>
  )
}