import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="skill">
        <div className="circle-name circle-name-react">
          <p>React</p>
        </div>
        <div className="line-name-skill">
          <div className="word">
            <p className="name">REACT</p>
            <p className="percent">20%</p>
          </div>
          <div className="line">
            <div className="line-skill line-skill-react" />
          </div>
        </div>
        <div className="circle-name circle-name-vue">
          <p>Vue</p>
        </div>
        <div className="line-name-skill">
          <div className="word">
            <p className="name">VUE</p>
            <p className="percent">40%</p>
          </div>
          <div className="line">
            <div className="line-skill line-skill-vue" />
          </div>
        </div>
        <div className="circle-name circle-name-js">
          <p>JS</p>
        </div>
        <div className="line-name-skill">
          <div className="word">
            <p className="name">JS</p>
            <p className="percent">35%</p>
          </div>
          <div className="line">
            <div className="line-skill line-skill-js" />
          </div>
        </div>
        <div className="circle-name circle-name-html">
          <p>HTML5</p>
        </div>
        <div className="line-name-skill">
          <div className="word">
            <p className="name">HTML5</p>
            <p className="percent-">80%</p>
          </div>
          <div className="line">
            <div className="line-skill line-skill-html" />
          </div>
        </div>
        <div className="circle-name circle-name-css">
          <p>CSS3</p>
        </div>
        <div className="line-name-skill">
          <div className="word">
            <p className="name">CSS3</p>
            <p className="percent">85%</p>
          </div>
          <div className="line">
            <div className="line-skill line-skill-css" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
