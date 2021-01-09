import React, { Component } from "react";
import Projects from "./Projects";
import Expertise from "./Expertise";

class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageLoaded: false,
    };
    this.handleLoad = this.handleLoad.bind(this);
  }
  componentDidMount() {
    this.handleLoad();
  }
  handleLoad() {
    this.setState({ pageLoaded: true });
  }

  render() {
    return (
      <div
        id={!this.state.pageLoaded ? "" : "loaded"}
        className="landing-right"
      >
        <div className="right-div">
          <h3>ABOUT</h3>
          <h1>WHO AM I?</h1>
          <p>
            <strong className="landing-strong">Hello! I am Jokūbas. </strong>I
            am a motivated Web Developer currently studying first-year Computer
            Science at the University of Leeds. I started learning to program
            three years ago and got into Web development in September 2019.
            Since then I have accumulated a year of working experience (Over
            1500 contributions on Github). This September I started University,
            that was when I shifted to working part-time. Due to this I am
            seeking a flexible part-time role and am willing to commit to 16 -
            18 hours a week. I am very communicative and used to working in a
            team because of my involvement in many of my towns activities while
            taking the leaders role. I strive for performance, reusable and
            security optimised code and I firmly believe my knowledge will fit
            your needs.
          </p>
        </div>
        <div className="right-div">
          <h3>MY SKILLS</h3>
          <h1>TECHNOLOGIES</h1>
          <div className="landing-right-ul">
            <section>
              <p>
                <strong className="landing-strong">
                  I am comfortable with:
                </strong>
              </p>
              <ul>
                <li>React / Redux / Router / Recoil</li>
                <li>React Native</li>
                <li>Typescript</li>
                <li>Apollo GraphQL</li>
                <li>Various form validation libraries</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>JWT</li>
                <li>Bootstrap, Advanced CSS, Semantic UI, Material, AntD</li>
                <li>Adobe Photoshop</li>
                <li>Deploying</li>
                <li>Performance</li>
                <li>PWA</li>
                <li>SSR and CSR</li>
              </ul>
            </section>
            <section>
              <p>
                <strong className="landing-strong">
                  I have worked / am familiar with:
                </strong>
              </p>
              <ul>
                <li>Docker</li>
                <li>EJS</li>
                <li>Semantic UI</li>
                <li>Figma</li>
                <li>D3</li>
                <li>Testing</li>
                <li>Next.js</li>
                <li>jQuery</li>
              </ul>
            </section>
          </div>
        </div>
        <div className="right-div">
          <h3>MY WORK</h3>
          <h1>RECENT PROJECTS</h1>
          <Projects />
        </div>
        <div className="right-div">
          <h3>WHAT I DO?</h3>
          <h1>HERE ARE SOME OF MY EXPERTISE</h1>
          <Expertise />
        </div>
      </div>
    );
  }
}

export default Right;
