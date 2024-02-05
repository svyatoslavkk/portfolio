import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import { aboutDescription, positionTitle } from '../../constants/constants';

export default function AboutMe() {
  return (
    <section className="default-section">
      <div className="main-info">
        <h2 className="title">About Me</h2>
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
  )
}