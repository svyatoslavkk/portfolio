import { technologies, tools } from "../../constants/constants";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';

export default function Skills() {
  return (
    <section className="default-section">
      <h2 className="title">Skills</h2>
      <div className="column-content" style={{width: "100%"}}>
        <h3 className="pre-title">Technologies I used</h3>
        <div className="flex-wrap-list">
          {technologies.map((el) => (
            <div className="tech-item">
              <img src={el.icon} className="tiny-icon-image" alt={el.name} />
              <span className="light-text">{el.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="column-content" style={{width: "100%"}}>
        <h3 className="pre-title">Development Tools I used</h3>
        <div className="flex-wrap-list">
          {tools.map((el) => (
            <div className="tech-item">
              <img src={el.icon} className="tiny-icon-image" alt={el.name} />
              <span className="light-text">{el.name}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="resume-btn">
        <FileDownloadRoundedIcon sx={{ color: "#110f0f" }} />
        <span className="light-text">Resume</span>
      </button>
    </section>
  )
}