import { technologies, tools } from "../../constants/constants";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';

export default function Skills() {
  return (
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
      <button className="resume-btn">
        <FileDownloadRoundedIcon sx={{ color: "#110f0f" }} />
        <span className="dark-text">Resume</span>
      </button>
    </section>
  )
}