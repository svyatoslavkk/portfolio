import { projects } from '../../constants/constants';
import { IProject } from '../../types/types';

export default function Projects() {
  const gitHub = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png";
  
  return (
    <section className="default-section">
      <h2 className="title">Projects I've<br /> Worked on</h2>
      {projects.map((el: IProject) => (
        <div className="card">
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
                      <span className="dark-text">{workItem}</span>
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
                      <span className="light-text">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a href={el.codeLink} target="_blank" rel="noopener noreferrer">
              <button className="primary-btn">
                <img src={gitHub} className="mid-icon-image" alt="GitHub" />
                <span className="dark-text">Go to Github</span>
              </button>
            </a>
          </div>
        </div>
      ))}
      <div className="flex-content">
        <button className="yellow-btn">
          <img src={gitHub} className="mid-icon-image" alt="GitHub" />
          <span className="dark-text">See Github</span>
        </button>
      </div>
    </section>
  )
}