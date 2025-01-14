import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './footer.css';

const Footer = () => {

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-flex-container">
          <div className="footer-item">
            <span className="footer-text">
              By- Prakrati & Harshit
            </span>
          </div>
          <div className="footer-item footer-copyright">
            campus corner
          </div>
          {/* <div className="footer-item footer-icons">
            <a href="https://github.com/AbhiDiva96/75per">
              <GitHubIcon className="icon git" />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-kumar-062231198/">
              <LinkedInIcon className="icon linkedin" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;