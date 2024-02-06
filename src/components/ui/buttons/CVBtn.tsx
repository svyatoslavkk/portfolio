import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import cvFile from '../../../assets/Svyatoslav Krivonos Jr Front End Developer.pdf';

export default function CVBtn() {

  const handleDownload = () => {
    window.open(cvFile, '_blank');
  };

  return (
    <button className="cv-btn" onClick={handleDownload}>
      <FileDownloadRoundedIcon sx={{ color: "#110f0f" }} />
      <span className="dark-text">CV</span>
    </button>
  )
}