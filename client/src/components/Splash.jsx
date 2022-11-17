import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "../assets/stylesheets/splash.css";
import "../assets/stylesheets/header.css";
import "../assets/stylesheets/footer.css";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="home-div">
          <header className="main-header">
            <div className="header-logo">
              <div className="sidebar-title">
                <Link to="/" className="sidebar-title-link">
                  <i className="fab fa-spotify"></i>
                  <div id="splash-logo" className="sidebar-Rock-N-Roll">Rock-N-Roll</div>
                </Link>
              </div>
            </div>
            <div className="header-no-session">
              <div className="link-container">
                <a href="https://www.spotify.com/us/premium/" target="_blank"><button>Premium</button></a>
                <a href="https://www.youtube.com/watch?v=2Q_ZzBGPdqE" target="_blank"><button>Support</button></a>
                <a href="https://www.apple.com/ios/app-store/" target="_blank"><button>Download</button></a>
                <p className="link-divider">｜</p>
                <Link to="/signup" className="session-links">
                  First time here
                </Link>
                <Link to="/login" className="session-links">
                  Login
                </Link>
              </div>
            </div>
          </header>
          <br />
          <div className="greeting-div">
            <h1 className="greeting">BIG CHILL.</h1>
            <h4 className="greeting-msg">
              SONGS AT EVERY STEPS. No credit card needed.
            </h4>
            <div className="demo-button-div">
              <Link to="/signup" className="session-links">
                <button className="demo-button">GET MUSIC FREE</button>
              </Link>
            </div>
          </div>
        </div>
        <footer className="container">
          <div className="inner-container">
            <div className="footer-links">
              <h3>Poojan Shah</h3>
              <div className="github-img">
                <i className="fab fa-github"></i>
                <a href="https://github.com/poojan4ps" target="_blank"> Github</a>
              </div>
              <div className="linkedin-img">
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/poojan-shah-2aa8b5136/"> LinkedIn</a>
              </div>
            </div>
            <div className="footer-links">
              <h3>Rutvik Moradiya </h3>
              <div className="github-img">
                <i className="fab fa-github"></i>
                <a href="https://github.com/rutvik-moradiya" target="_blank"> Github</a>
              </div>
              <div className="linkedin-img">
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/rutvik-moradiya-a6989312a/"> LinkedIn</a>
              </div>
            </div>
            <div className="footer-links">
              <h3>Rishabh Gupta</h3>
              <div className="github-img">
                <i className="fab fa-github"></i>
                <a href="https://github.com/Rishabh3095" target="_blank"> Github</a>
              </div>
              <div className="linkedin-img">
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/rishabhgupta95/"> LinkedIn</a>
              </div>
            </div>
            <div className="footer-links">
              <h3>Jack Kalavadia</h3>
              <div className="github-img">
                <i className="fab fa-github"></i>
                <a href="https://github.com/jackkalavadia" target="_blank"> Github</a>
              </div>
              <div className="linkedin-img">
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/"> LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Splash;