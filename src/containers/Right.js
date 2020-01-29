import React, {Component} from 'react';
import Projects from './Projects';
import Expertise from './Expertise';

class Right extends Component{
    constructor(props){
        super(props);
        this.state = {
            pageLoaded: false
        }
        this.handleLoad = this.handleLoad.bind(this);
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
    }
    handleLoad(){
        this.setState({pageLoaded: true})
    }

    render(){
        return(
            <div id={!this.state.pageLoaded ? "" : "loaded"} className='landing-right'>
                <div className='right-div'>
                    <h3>ABOUT</h3>
                    <h1>WHO AM I?</h1>
                    <p><strong className='landing-strong'>Hello! I am Jokūbas. </strong> 
                        I am currently taking a gap year before studying Computer Science at University of Leeds.
                        I have been learning Programming / Web Development for the past 3 years. Through my life I have picked up various hobbies and personality traits.
                        I am very communicative and used to working in a team because of my involvement im many of my towns activities while taking the leaders role. 
                        I strive for performance, reusable and security optimised code. I have taken 3 Udemy courses to advance my knowledge in modern Web Development and I firmly believe my knowledge will fit your needs. 
                    </p>
                </div>
                <div className='right-div'>
                    <h3>MY SKILLS</h3>
                    <h1>TECHNOLOGIES</h1>
                    <div className='landing-right-ul'>
                        <section>
                            <p><strong className='landing-strong'>I am comfortable with:</strong></p>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>React / Redux / Router</li>
                                <li>MongoDB</li>
                                <li>JWT</li>
                                <li>Bootstrap, Advanced CSS, SVG</li>
                                <li>SSH</li>
                                <li>Deploying</li>
                                <li>Performance</li>
                                <li>Adobe Photoshop</li>
                                <li>PWA</li>
                                <li>SSR and CSR</li>
                            </ul>
                        </section>
                        <section>
                            <p><strong className='landing-strong'>I have worked / am familiar with:</strong></p>
                            <ul>
                                <li>Docker</li>
                                <li>Code Splitting</li>
                                <li>EJS</li>
                                <li>Semantic UI, Bootstrap</li>
                                <li>Typescript</li>
                                <li>Figma</li>
                                <li>D3</li>
                                <li>Testing</li>
                                <li>Next.js</li>
                                <li>jQuery</li>

                            </ul>
                        </section>
                    </div>
                </div>
                <div className='right-div'>
                    <h3>MY WORK</h3>
                    <h1>RECENT PROJECTS</h1>
                    <Projects/>
                </div>
                <div className='right-div'>
                    <h3>WHAT I DO?</h3>
                    <h1>HERE ARE SOME OF MY EXPERTISE</h1>
                    <Expertise/>
                </div>
            </div>
        )
    }
}

export default Right;