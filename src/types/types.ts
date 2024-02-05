export type ITech = {
  icon: string;
  name: string;
}

export type ICertificate = {
  school: string;
  schoolLogo: string;
  certificate: string;
  link: string;
}

export type IProject = {
  screenshots: string;
  name: string;
  workedOn: string[];
  techs: ITech[];
  codeLink: string;
}