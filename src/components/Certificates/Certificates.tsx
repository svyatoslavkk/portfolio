import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { certificates } from "../../constants/constants";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ICertificate } from "../../types/types";
import { RefProps } from '../../types/interfaces';

export default function Certificates({innerRef}: RefProps) {
  const certifIcon = "https://cdn-icons-png.flaticon.com/512/2617/2617793.png";
  const [isVisible, setIsVisible] = useState(false);

  const fadeInAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-10%)',
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
  }, [isVisible, innerRef]);

  return (
    <animated.section
      ref={innerRef}
      className="default-section"
      style={{
        ...fadeInAnimation,
      }}
    >
    <section className="default-section">
      <h2 className="title">Certificates</h2>
      <div className="certificates-list">
        {certificates.map((el: ICertificate) => (
          <div className="certificate-item">
            <div className="upper">
              <div className="school-info flex-content">
                <div className="logo-icon">
                  <img className="mid-icon-image" src={el.schoolLogo} alt={el.school} />
                </div>
                <h3 className="pre-title">{el.school}</h3>
              </div>
              <img className="big-icon-image" src={certifIcon} alt="Certificate" />
            </div>
            <div className="mid">
              <h3 className="pre-title-dark">{el.certificate}</h3>
            </div>
            <div className="flex-content">
              <a href={el.link} className="view-btn" target="_blank" rel="noopener noreferrer">
                <VisibilityIcon sx={{ color: "#110f0f" }} />
                <span className="dark-text">View</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </animated.section>
  )
}