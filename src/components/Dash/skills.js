import React from 'react';
import eye from '../../assets/svg/eye.svg';
import '../../scss/components/skills.scss';

const Skills = () => {
    return(
        <div className="skills">
            <div className="front">
                <section>
                    <h3>FrontEnd</h3>
                    <button><i className="far fa-eye"></i></button>
                </section>
                <section>
                    <button>
                        <img src={eye} alt="close eye"/>
                    </button>
                    <ul>
                        <li><img src="https://img.icons8.com/nolan/30/html-5.png" alt="frontend icons"/> HTML5</li>
                        <li><img src="https://img.icons8.com/color/30/000000/css3.png" alt="frontend icons"/> CSS3</li>
                        <li><img src="https://img.icons8.com/nolan/30/javascript.png" alt="frontend icons"/> JavaScript</li>
                        <li><img src="https://img.icons8.com/color/30/000000/sass.png" alt="frontend icons"/> SASS</li>
                        <li><img src="https://img.icons8.com/color/30/000000/react-native.png" alt="frontend icons"/>  React.Js</li>
                    </ul>
                </section>
            </div>
            <div className="back">
                <section>
                    <h3>BackEnd</h3>
                    <button><i className="far fa-eye"></i></button>
                </section>
                <section>
                    <button>
                        <img src={eye} alt="close eye"/>
                    </button>
                    <ul>
                        <li><img src="https://img.icons8.com/nolan/30/github.png" alt="backend icons"/>GitHub</li>
                        <li><img src="https://img.icons8.com/nolan/30/javascript.png" alt="backend icons"/> <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="nodejs"/></li>
                        <li><img src="https://img.icons8.com/color/30/000000/firebase.png" alt="backend icons"/> Firebase</li>
                        <li><img src="https://img.icons8.com/nolan/30/mysql.png" alt="backend icons"/> Sequelize </li>
                        <li><img src="https://img.icons8.com/nolan/30/heroku.png" alt="backend icons"/> Heroku</li>
                    </ul>
                </section>
            </div>
            <div className="mobile">
                <section >
                    <h3>Mobile</h3>
                    <button><i className="far fa-eye"></i></button>
                </section>
                <section >
                    <button>
                        <img src={eye} alt="close eye"/>
                    </button>
                    <ul>
                        <li><img src="https://img.icons8.com/color/30/000000/flutter.png" alt="mobile icons"/> Flutter</li>
                        <li><img src="https://img.icons8.com/color/30/000000/react-native.png" alt="mobile icons"/> React_Native</li>
                        <li><img src="https://img.icons8.com/color/30/000000/firebase.png" alt="mobile icons"/> Firebase</li>
                        <li><img src="https://img.icons8.com/color/30/000000/mongodb.png" alt="mobile icons"/> MongoDB</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Skills;
