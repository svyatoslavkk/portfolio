import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { socials } from "../../constants/constants";
import { RefProps } from '../../types/interfaces';

export default function ConnectWithMe({innerRef}: RefProps) {
  const [isVisible, setIsVisible] = useState(false);

  const fadeInAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-10%)',
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
        <h2 className="title">Connect With Me</h2>
        <div className="flex-wrap-list" style={{ justifyContent: 'center'}}>
          {socials.map((el) => (
            <a href={el.link} className="social-item" target="_blank" rel="noopener noreferrer">
              <img src={el.icon} className="big-circle-icon-image" alt={el.name} />
              <span className="social-name" style={{color: el.textColor}}>{el.name}</span>
            </a>
          ))}
        </div>
      </section>
    </animated.section>
  )
}