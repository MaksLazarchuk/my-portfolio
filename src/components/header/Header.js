import "./Header.css";
import photo from "../../media/photo.png";
import user from "../../media/user.png";
import circles from "../../media/circles.png";
import bag from "../../media/bag.png";
import docu from "../../media/docu.png";

function Header({ changeActivePages }) {
  return (
    <div className="App">
      <header id="App-header">
        <div className="container">
          <div className="photo">
            <img src={photo} alt="photo" />
          </div>
          <div className="links">
            <div className="profile link-box">
              <a href="#" onClick={() => changeActivePages(0)}>
                <img src={user} alt="user" />
                PROFILE
              </a>
            </div>
            <div className="skills link-box">
              <a href="#" onClick={() => changeActivePages(1)}>
                <img src={circles} alt="circles" />
                SKILLS
              </a>
            </div>
            <div className="works link-box">
              <a href="#" onClick={() => changeActivePages(2)}>
                <img src={bag} alt="bag" />
                WORKS
              </a>
            </div>
            <div className="resume link-box">
              <a href="#" onClick={() => changeActivePages(3)}>
                <img src={docu} alt="docu" />
                RESUME
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
