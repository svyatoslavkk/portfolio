import { certificates } from "../../constants/constants";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ICertificate } from "../../types/types";

export default function Certificates() {
  const certifIcon = "https://cdn-icons-png.flaticon.com/512/2617/2617793.png";
  return (
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
  )
}