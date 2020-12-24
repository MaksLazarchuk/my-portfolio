import "./Header.css";
import photogram from "../../media/photogram.png";
import user from "../../media/user.png";
import circles from "../../media/circles.png";
import bag from "../../media/bag.png";
import docu from "../../media/docu.png";

function Header({ changeActivePages, activePages }) {
  function addClassIfActive(index) {
    if (index === activePages) return "active";
    return;
  }

  return (
    <div className="App">
      <header id="App-header">
        <div className="container-header">
          <div className="photo">
            <a href="#" onClick={() => changeActivePages(0)}>
              <img src={photogram} alt="photogram" />
            </a>
          </div>
          <div className="links">
            <div className={"profile link-box " + addClassIfActive(0)}>
              <a href="#" onClick={() => changeActivePages(0)}>
                <img src={user} alt="user" />
                PROFILE
              </a>
            </div>
            <div className={"skills link-box " + addClassIfActive(1)}>
              <a href="#" onClick={() => changeActivePages(1)}>
                <img src={circles} alt="circles" />
                SKILLS
              </a>
            </div>
            <div className={"works link-box " + addClassIfActive(2)}>
              <a href="#" onClick={() => changeActivePages(2)}>
                <img src={bag} alt="bag" />
                WORKS
              </a>
            </div>
            <div className={"resume link-box " + addClassIfActive(3)}>
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
