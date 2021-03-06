import "./Profile.css";
import photogram from "../../media/photogram.jpg";
import check from "../../media/check.png";
import { Consumer } from "../../ModalContext";

function Profile({ toggle }) {
  return (
    <div className="profile">
      <div className="container-pages">
        <div className="frame">
          <img className="photogram" src={photogram} alt="photogram" />
        </div>
        <div className="box-text">
          <h2 className="name">Maksym Lazarchuk</h2>
          <p className="profesion">Frontend Developer</p>
          <p className="description">
            Hello I am Maksym Lazarchuk Frontend Developer from Ukraine, If you
            have something to be done just call my name and ill be there.
          </p>
        </div>
        <Consumer>
          {(toggle) => (
            <button className="button-hire" onClick={toggle}>
              <img className="check" src={check} alt="check" />
              HIRE ME
            </button>
          )}
        </Consumer>
      </div>
    </div>
  );
}

export default Profile;
