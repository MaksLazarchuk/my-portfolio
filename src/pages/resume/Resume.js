import "./Resume.css";
import download from "../../media/download.png";
import resume from "../../media/Resume.docx";

function Resume() {
  return (
    <div className="resume-content">
      <h1 className="my-resume">MY RESUME</h1>
      <p className="resume-text">
        You can download my resume for your references, and I hope that we can
        meet very soon
      </p>
      <a href={resume} download>
        <button className="button-download">
          <img className="download" src={download} alt="download" />
          DOWNLOAD RESUME
        </button>
      </a>
    </div>
  );
}

export default Resume;
