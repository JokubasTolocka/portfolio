import React, {Component} from 'react';

class Left extends Component{
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
            <div className='landing-left'>
                <div className='landing-left-content'>
                    <div className='left-initial' id={!this.state.pageLoaded ? "" : "left-initial-loaded"}>
                        <h1>Jokūbas Toločka</h1>
                        <h3>Full Stack Web Developer from Lithuania</h3>
                        <div className='landing-left-links'>
                            <a href='https://www.facebook.com/profile.php?id=100009199496157'><i className="fab fa-facebook-f"></i></a>
                            <a href='https://www.linkedin.com/in/jok%C5%ABbas-tolo%C4%8Dka-272b70198/'><i className="fab fa-linkedin"></i></a>
                            <a href='https://github.com/JokubasTolocka'><i className="fab fa-github"></i></a>

                        </div>
                    </div>
                    <h3 className='left-quote' id={!this.state.pageLoaded ? "" : "quote-loaded"}>“Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.”<span className='quote-author'> - Antoine de Saint-Exupery</span></h3>
                </div>
            </div>
        )
    }
}

export default Left;