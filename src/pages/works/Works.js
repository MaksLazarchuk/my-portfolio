import "./Works.css";
import ticTacToe from "../../media/tic-tac-toe.png";
import album from "../../media/album.png";
import news from "../../media/news.png";
import restaurant from "../../media/restaurant.png";

function Works() {
  return (
    <div className="work">
      <div className="box-galerry">
        <a href="https://makslazarchuk.github.io/crosses-zeros/">
          <div className="galerry">
            <img className="img-galerry" src={ticTacToe} alt="ticTacToe" />
          </div>
        </a>
      </div>
      <div className="box-galerry">
        <a href="https://makslazarchuk.github.io/estimation/">
          <div className="galerry">
            <img className="img-galerry" src={album} alt="album" />
          </div>
        </a>
      </div>
      <div className="box-galerry">
        <a href="https://makslazarchuk.github.io/News/">
          <div className="galerry">
            <img className="img-galerry" src={news} alt="news" />
          </div>
        </a>
      </div>
      <div className="box-galerry">
        <a href="https://github.com/MaksLazarchuk/estimation">
          <div className="galerry">
            <img className="img-galerry" src={restaurant} alt="restaurant" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Works;
