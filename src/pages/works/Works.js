import "./Works.css";
import galerry from "../../media/galerry.png";
import ticTacToe from "../../media/tic-tac-toe.png";
import album from "../../media/album.png";

function Works() {
  return (
    <div className="work">
      <div className="box-galerry">
        <a href="https://github.com/MaksLazarchuk/crosses-zeros">
          <div className="galerry">
            <img className="img-galerry" src={ticTacToe} alt="ticTacToe" />
          </div>
        </a>
      </div>
      <div className="box-galerry">
        <a href="https://github.com/MaksLazarchuk/estimation">
          <div className="galerry">
            <img className="img-galerry" src={album} alt="album" />
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
