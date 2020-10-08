import React from 'react';
import '../../scss/components/about.scss';
import me from '../../assets/new.png';

export default () => {
    const heading = ['A','b','o','u','t',' ','m','e','.'];
    return (
        <div className="about">
            <div className="content">
                <div> 
                    <h1>
                        { heading.map(letter=><span>{letter}</span>)}
                    </h1>
                </div>
                <section>
                    <p>
                        Professionally connected with the web development industry and information technology for many years.
                    </p>
                    <br/>
                    <p>
                        Well-organised person, problem solver, independent employee with high attention to detail. 
                        Fan & player of blues, outdoor activities, TV series and, recently, English literature.
                    </p>
                    <br/>
                    <p>
                        Interested in the entire many development spectrum and working on ambitious projects with positive people.
                    </p>
                </section>
            </div>
            <div className="styling">
                <img src={me} alt="me"/>
            </div>
        </div>
    )
}
