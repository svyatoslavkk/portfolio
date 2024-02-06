import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import { aboutDescription, nameSurname, positionTitle } from '../../constants/constants';

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  const fadeInAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100px)',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <animated.div
      style={{
        ...fadeInAnimation,
      }}
    >
    <section className="default-section">
      <div className="main-info">
        <h2 className="title">{nameSurname}</h2>
        <h3 className="pre-title">{positionTitle}</h3>
        <div className="flex-content">
          <button className="resume-btn">
            <FileDownloadRoundedIcon sx={{ color: "#110f0f" }} />
            <span className="dark-text">Resume</span>
          </button>
        </div>
      </div>
      <h2 className="title">About Me</h2>
      <div className="text-block">
        <p className="light-text">{aboutDescription}</p>
      </div>
    </section>
    </animated.div>
  )
}