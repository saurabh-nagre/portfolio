import './navbar.css';
import '../App.css';
import EarthLogo from '../assets/earth-logo.jpg';
import MailLogo from '../assets/mail-logo.png';
import ProjectLogo from '../assets/projects-logo.png';
import WorkLogo from '../assets/works-logo.png';
import ResumeLogo from '../assets/resume-logo.png';
import EventLogo from '../assets/event-logo.png';
export default function Navbar(props){

    return(
        <nav className={`main navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#main"><img  className="logo" src={EarthLogo} alt="Home"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="mailto:nagre.saurabh.10@gmail.com">
                  <div className={`${props.mode}`}>
                    <img className="logo" src={MailLogo} alt="mail"/>
                    nagre.saurabh.10@gmail.com
                  </div> </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#resume'>
                <div className={`${props.mode}`}>
                    <img className="logo" src={ResumeLogo} alt="projects"/>
                    Resume </div></a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#mywork">
                <div className={`${props.mode}`}>
                    <img className="logo" src={ProjectLogo} alt="mail"/>
                    Projects</div> </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#shelf">
                  <div className={`${props.mode}`}> <img className="logo" src={WorkLogo} alt="work"/>
                   Shelf </div></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#evnets">
                  <div className={`${props.mode}`}> <img className="logo" src={EventLogo} alt="event"/>
                   Events </div></a>
              </li> */}

              <li className="nav-item switch">
                <div className="form-check form-switch">
                    <input className="form-check-input" onChange={props.toggle} type="checkbox" id="flexSwitchCheckChecked" defaultChecked={props.mode==='dark'}/>
                    <label className={`form-check-label ${props.mode}`} htmlFor="flexSwitchCheckChecked">{props.mode==='dark'?'Disable Dark Mode':'Enable Dark Mode'}</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}