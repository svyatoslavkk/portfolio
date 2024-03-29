import { useState, useEffect, RefObject } from 'react';
import { useSpring, animated } from 'react-spring';
import { HeaderProps } from '../../types/interfaces';

export default function Header({ skillsRef, connectWithMeRef, certificatesRef, projectsRef }: HeaderProps) {
  const [isVisible, setIsVisible] = useState(false);

  const fadeInAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(-50%) translateY(0px)' : 'translateX(-40%) translateY(-100px)',
  });

  const scrollToRef = (ref: RefObject<HTMLElement>) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <animated.header 
      className="header"
      style={{
        ...fadeInAnimation,
      }}
    >
      <button className="header-btn" onClick={scrollToTop}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#effafa" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3ZM14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z"></path> </g></svg>
        <span className="light-text">Home</span>
      </button>
      <button className="header-btn" onClick={() => scrollToRef(projectsRef)}>
        <svg width="24px" height="24px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>project</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Combined-Shape" fill="#effafa" transform="translate(64.000000, 34.346667)"> <path d="M192,7.10542736e-15 L384,110.851252 L384,332.553755 L192,443.405007 L1.42108547e-14,332.553755 L1.42108547e-14,110.851252 L192,7.10542736e-15 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M341.333,157.655 L213.333,231.555 L213.333,381.82 L341.333333,307.920144 L341.333,157.655 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z"> </path> </g> </g> </g></svg>
        <span className="light-text">Projects</span>
      </button>
      <button className="header-btn" onClick={() => scrollToRef(certificatesRef)}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 3L13.9101 4.87147L16.5 4.20577L17.2184 6.78155L19.7942 7.5L19.1285 10.0899L21 12L19.1285 13.9101L19.7942 16.5L17.2184 17.2184L16.5 19.7942L13.9101 19.1285L12 21L10.0899 19.1285L7.5 19.7942L6.78155 17.2184L4.20577 16.5L4.87147 13.9101L3 12L4.87147 10.0899L4.20577 7.5L6.78155 6.78155L7.5 4.20577L10.0899 4.87147L12 3Z" stroke="#effafa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <span className="light-text">Certifications</span>
      </button>
      <button className="header-btn" onClick={() => scrollToRef(skillsRef)}>
        <svg fill="#effafa" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M195.234,357.719L260.313,245l-65.078-112.719H65.078L0,245l65.078,112.719H195.234z M82.76,162.906h94.794L224.95,245 l-47.396,82.094H82.76L35.362,245L82.76,162.906z"></path> <path d="M294.766,0l-65.078,112.718l65.078,112.718h130.156L490,112.718L424.922,0H294.766z M407.241,194.812h-94.794 l-47.397-82.093l47.397-82.093h94.794l47.396,82.093L407.241,194.812z"></path> <path d="M294.766,264.563l-65.078,112.718L294.766,490h130.156L490,377.281l-65.078-112.718H294.766z M407.241,459.375h-94.794 l-47.397-82.094l47.397-82.093h94.794l47.396,82.093L407.241,459.375z"></path> </g> </g></svg>
        <span className="light-text">Skills</span>
      </button>
      <button className="header-btn" onClick={() => scrollToRef(connectWithMeRef)}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z" fill="#effafa"></path> <path d="M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8ZM9.97716 8C9.97716 9.11719 10.8828 10.0228 12 10.0228C13.1172 10.0228 14.0228 9.11719 14.0228 8C14.0228 6.88281 13.1172 5.97716 12 5.97716C10.8828 5.97716 9.97716 6.88281 9.97716 8Z" fill="#effafa"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.39909 16.6808C6.49015 13.8286 9.47114 13 12 13C14.5289 13 17.5099 13.8286 18.6009 16.6808C18.9505 17.5948 18.6826 18.4756 18.1363 19.0778C17.6103 19.6576 16.8215 20 16 20H8C7.17849 20 6.38973 19.6576 5.86372 19.0778C5.31737 18.4756 5.04947 17.5948 5.39909 16.6808ZM12 15C9.72346 15 7.89905 15.7433 7.26709 17.3954C7.21826 17.523 7.25506 17.6349 7.34496 17.734C7.47492 17.8772 7.71694 18 8 18H16C16.2831 18 16.5251 17.8772 16.655 17.734C16.7449 17.6349 16.7817 17.523 16.7329 17.3954C16.101 15.7433 14.2765 15 12 15Z" fill="#effafa"></path> </g></svg>
        <span className="light-text">Contacts</span>
      </button>
    </animated.header>
  )
} 