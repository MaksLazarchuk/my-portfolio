import "./Footer.css";

function Footer({ toggle, isContactActive }) {
  return (
    <footer id="App-footer">
      <div className="container-footer">
        <div className="footer">
          <a href="https://github.com/MaksLazarchuk" className="reference">
            github.com/MaksLazarchuk
          </a>
          <button className="contact" onClick={toggle}>
            {isContactActive && <div className="round" />}
            CONTACT
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
