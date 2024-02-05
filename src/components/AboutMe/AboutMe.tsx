import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import { aboutDescription } from '../../constants/constants';

export default function AboutMe() {
  return (
    <section className="default-section">
      <div className="main-info">
        <h2 className="title">About Me</h2>
        <h3 className="pre-title">Front End Developer</h3>
        <div className="flex-content">
          <button className="resume-btn">
            <FileDownloadRoundedIcon sx={{ color: "#110f0f" }} />
            <span className="light-text">Resume</span>
          </button>
        </div>
      </div>
      <h2 className="title">About Me</h2>
      <div className="text-block">
        <p className="dark-text">{aboutDescription}</p>
      </div>
    </section>
  )
}