import "./Resume.css";
import download from "../../media/download.png";

function Resume() {
  return (
    <div className="resume-content">
      <h1 className="my-resume">MY RESUME</h1>
      <p className="resume-text">
        You can download my resume for your references, and I hope that we can
        meet very soon
      </p>
      <button className="button-download">
        <img className="download" src={download} alt="download" />
        DOWNLOAD RESUME
      </button>
    </div>
  );
}

export default Resume;
