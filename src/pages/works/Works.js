import "./Works.css";
import galerry from "../../media/galerry.png";

function Works() {
  return (
    <div className="work">
      <div className="box-galerry">
        <a href="https://github.com/MaksLazarchuk/crosses-zeros">
          <div className="galerry">
            <img className="img-galerry" src={galerry} alt="galerry" />
          </div>
        </a>
      </div>
      <div className="box-galerry">
        <a href="https://github.com/MaksLazarchuk/estimation">
          <div className="galerry">
            <img className="img-galerry" src={galerry} alt="galerry" />
          </div>
        </a>
      </div>
      <div className="box-galerry">
        <a href="https://github.com/MaksLazarchuk/crosses-zeros">
          <div className="galerry">
            <img className="img-galerry" src={galerry} alt="galerry" />
          </div>
        </a>
      </div>
      <div className="box-galerry">
        <a href="https://github.com/MaksLazarchuk/estimation">
          <div className="galerry">
            <img className="img-galerry" src={galerry} alt="galerry" />
          </div>
        </a>
      </div>
      <div className="box-galerry">
        <a href="https://github.com/MaksLazarchuk/crosses-zeros">
          <div className="galerry">
            <img className="img-galerry" src={galerry} alt="galerry" />
          </div>
        </a>
      </div>
      <div className="box-galerry">
        <a href="https://github.com/MaksLazarchuk/estimation">
          <div className="galerry">
            <img className="img-galerry" src={galerry} alt="galerry" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Works;
