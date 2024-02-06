import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { teamDevelopmentExperience } from '../../constants/constants';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import GpsFixedRoundedIcon from '@mui/icons-material/GpsFixedRounded';
import { RefProps } from '../../types/interfaces';

export default function TeamDevelopment({ innerRef }: RefProps) {
  const [isVisible, setIsVisible] = useState(false);

  const fadeInAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(10%)',
    config: { tension: 300, friction: 50 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const elementPosition = innerRef.current?.offsetTop || 0;

      if (scrollPosition > elementPosition && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <animated.section
      ref={innerRef}
      style={{
        ...fadeInAnimation,
      }}
    >
    <section className="default-section">
      <h2 className="title">Team Development Experience</h2>
      <div className="column-content" style={{width: "100%"}}>
        {teamDevelopmentExperience.map((el) => (
          <div className="certificate-item">
            <div className="upper">
              <div className="school-info flex-content">
                <div className="logo-icon">
                  <img className="mid-icon-image" src={el.projectLogo} alt={el.projectName} />
                </div>
                <div>
                  <h3 className="pre-title" style={{lineHeight: 1.5}}>{el.projectName}</h3>
                  <div className="place flex-content">
                    <GpsFixedRoundedIcon fontSize="inherit" sx={{color: "#f2ae07"}} />
                    <p className="gray-text">{el.place}</p>
                  </div>
                </div>
              </div>
              <div className="calendar flex-content">
                <CalendarMonthIcon fontSize="small" />
                <h4 className="pre-title-dark">{el.interval}</h4>
              </div>
            </div>
            <div className="mid">
              <div className="role flex-content">
                <img src={el.roleAvatar} className="big-circle-icon-image" alt={el.role} />
                <h3 className="pre-title-dark">{el.role}</h3>
              </div>
            </div>
            <div className="column-content">
              {el.tasks.map(task => (
                <div className="flex-content">
                  <CheckBoxRoundedIcon fontSize="small" />
                  <p className="dark-text">{task}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </animated.section>
  )
}