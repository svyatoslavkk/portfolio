import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { technologies, tools } from "../../constants/constants";
import { RefProps } from '../../types/interfaces';
import CVBtn from '../ui/buttons/CVBtn';

export default function Skills({ innerRef }: RefProps) {
  const [isVisible, setIsVisible] = useState(false);

  const fadeInAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(10%)',
    config: { tension: 300, friction: 50 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = innerRef.current?.offsetTop || 0;

      if (scrollPosition > elementPosition && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, innerRef]);
  
  return (
    <animated.section
    ref={innerRef}
    style={{
      ...fadeInAnimation,
    }}
    >
    <section className="default-section">
      <h2 className="title">Skills</h2>
      <div className="column-content" style={{width: "100%"}}>
        <h3 className="pre-title" style={{ textAlign: 'center' }}>Technologies I used</h3>
        <div className="flex-wrap-list" style={{ justifyContent: 'center'}}>
          {technologies.map((el) => (
            <div className="tech-item">
              <img src={el.icon} className="mid-icon-image" alt={el.name} />
              <span className="weight-light-text">{el.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="column-content" style={{width: "100%"}}>
        <h3 className="pre-title" style={{ textAlign: 'center' }}>Development Tools I used</h3>
        <div className="flex-wrap-list" style={{ justifyContent: 'center'}}>
          {tools.map((el) => (
            <div className="tech-item">
              <img src={el.icon} className="mid-icon-image" alt={el.name} />
              <span className="weight-light-text">{el.name}</span>
            </div>
          ))}
        </div>
      </div>
      <CVBtn />
    </section>
    </animated.section>
  )
}