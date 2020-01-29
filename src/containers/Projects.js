import React from 'react';
import Geocamp from '../images/geocamp.png'
import MovieApp from '../images/movieapp.png'
import RoboApp from '../images/RoboApp.png'
import Todos from '../images/todos.png'
import CryptoPrice from '../images/cryptoprice.png'
import Cosmos from '../images/cosmos.png'

function Projects(){
    return(
       <div className='projects'>
           <div className='project'>
                <div className='project-hover'>
                    <div className='project-top'>
                        <div className='project-top-top'>
                            <h3>GeoCamp</h3>
                            <div>
                                <a target="_blank" rel="noopener noreferrer" href='https://geocamp.herokuapp.com/'>View</a>
                                <a target="_blank" rel="noopener noreferrer" href='https://github.com/JokubasTolocka/GeoCamp'>Code</a>
                            </div>
                        </div>
                        <p>Full authentication - Email verification, Reset password, login using Facebook or Google. Star ratings, sorting by best rated first, Campground posting/editing/deleting with Google Maps location. Measures distance between you and the campground.</p>
                        <div className='project-tech'>
                            <h5 className='project-tech-singular'><i className="fab fa-react"></i> React/Redux/Router</h5>
                            <h5 className='project-tech-singular'><i className="fab fa-node-js"></i> Node.js, Express.js</h5>
                            <h5 className='project-tech-singular'><i className="fas fa-database"></i> MongoDB</h5>
                            <h5 className='project-tech-singular'><i className="fab fa-google"></i> Google OAuth2</h5>
                            <h5 className='project-tech-singular'><i className="far fa-eye"></i> Custom CSS</h5>
                            <h5 className='project-tech-singular'><i className="fab fa-facebook-f"></i> Facebook Login</h5>
                            <h5 className='project-tech-singular'><i className="fas fa-cloud"></i> Heroku</h5>
                        </div>
                    </div>
                </div>
                <img className='project-image' src={Geocamp} alt='website'/>
           </div>
           <div className='project'>
                <div className='project-hover'>
                <div className='project-top'>
                    <div className='project-top-top'>
                        <h3>MovieApp</h3>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href='https://moviereviewapp-app.herokuapp.com/'>View</a>
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/JokubasTolocka/Movie_app'>Code</a>
                        </div>
                    </div>
                    <p>PWA. More than 90 scored on Lighthouse. JWT authentication. Posting, Editing, Viewing and deleting Reviews. Profile Page with activity score. Comment adding and deleting. Sorting by most recent and most commented on Reviews.</p>
                    <div className='project-tech'>
                        <h5 className='project-tech-singular'><i className="fab fa-react"></i> React/Redux/Router</h5>
                        <h5 className='project-tech-singular'><i className="far fa-lightbulb"></i> PWA</h5>
                        <h5 className='project-tech-singular'><i className="fab fa-node-js"></i> Node.js, Express.js</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-database"></i> MongoDB</h5>
                        <h5 className='project-tech-singular'><i className="far fa-eye"></i> Custom CSS</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-cloud"></i> Heroku</h5>
                    </div>
                </div>
                </div>
                <img className='project-image' src={MovieApp} alt='website'/>
           </div>
           <div className='project'>
            <div className='project-hover'>
                <div className='project-top'>
                    <div className='project-top-top'>
                        <h3>RoboApp</h3>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href='https://jokubastolocka.github.io/robo-typescript/'>View</a>
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/JokubasTolocka/robo-typescript'>Code</a>
                        </div>
                    </div>
                    <p>Fetch call to get robots with their details and a search bar to find the one you need. App made using CRA-Typescript.</p>
                    <div className='project-tech'>
                        <h5 className='project-tech-singular'><i className="fab fa-react"></i> React/Redux</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-code"></i> Typescript</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-server"></i> API Call</h5>
                        <h5 className='project-tech-singular'><i className="far fa-eye"></i> Tachyons</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-cloud"></i> GithubPages</h5>
                    </div>
                </div>
                </div>
                <img className='project-image' src={RoboApp} alt='website'/>
           </div>
           <div className='project'>
            <div className='project-hover'>
                <div className='project-top'>
                    <div className='project-top-top'>
                        <h3>Todos</h3>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href='https://todosappnode.herokuapp.com/'>View</a>
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/JokubasTolocka/ToDoAppUsingAPI'>Code</a>
                        </div>
                    </div>
                    <p>SSR app which lets you post/delete/mark done todos.</p>
                    <div className='project-tech'> 
                        <h5 className='project-tech-singular'><i className="fab fa-node-js"></i> Node.js, Express.js</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-database"></i> MongoDB</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-code"></i> jQuery</h5>
                        <h5 className='project-tech-singular'><i className="far fa-eye"></i> Custom CSS</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-cloud"></i> Heroku</h5>
                    </div>
                </div>
                </div>
                <img className='project-image' src={Todos} alt='website'/>
           </div>
           <div className='project'>
            <div className='project-hover'>
                <div className='project-top'>
                    <div className='project-top-top'>
                        <h3>CryptoPrice</h3>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href='https://cryptocheckprice.herokuapp.com/'>View</a>
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/JokubasTolocka/CryptoPrice'>Code</a>
                        </div>
                    </div>
                    <p>App fetches data from Stock page and displays it, increase or decrease are represented by colours.</p>
                    <div className='project-tech'> 
                        <h5 className='project-tech-singular'><i className="fab fa-js"></i> Javascript</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-server"></i> API Call</h5>
                        <h5 className='project-tech-singular'><i className="far fa-eye"></i> Custom CSS</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-cloud"></i> Heroku</h5>
                    </div>
                </div>
                </div>
                <img className='project-image' src={CryptoPrice} alt='website'/>
           </div>
           <div className='project'>
            <div className='project-hover'>
                <div className='project-top'>
                    <div className='project-top-top'>
                        <h3>Cosmos</h3>
                        <div>
                            <a target="_blank" rel="noopener noreferrer" href='https://cosmospage.herokuapp.com/'>View</a>
                            <a target="_blank" rel="noopener noreferrer" href='https://github.com/JokubasTolocka/CosmosPage'>Code</a>
                        </div>
                    </div>
                    <p>Animated SVG images. Fetches NASA's image of the day from their open database, included Youtube video</p>
                    <div className='project-tech'> 
                        <h5 className='project-tech-singular'><i className="fab fa-js"></i> Javascript</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-vector-square"></i> SVG</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-server"></i> API Call</h5>
                        <h5 className='project-tech-singular'><i className="far fa-eye"></i> Custom CSS</h5>
                        <h5 className='project-tech-singular'><i className="fas fa-cloud"></i> Heroku</h5>
                    </div>
                </div>
                </div>
                <img className='project-image' src={Cosmos} alt='website'/>
           </div>

       </div> 
    )
}

export default Projects;