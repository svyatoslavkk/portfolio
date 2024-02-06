import { RefObject } from 'react';

export interface RefProps {
  innerRef: React.RefObject<HTMLElement>;
}

export interface HeaderProps {
  skillsRef: RefObject<HTMLElement>;
  connectWithMeRef: RefObject<HTMLElement>;
  certificatesRef: RefObject<HTMLElement>;
  projectsRef: RefObject<HTMLElement>;
}