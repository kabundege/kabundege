import React from 'react'
import '../../scss/components/about.scss';

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
                        Fan of MMA, outdoor activities, TV series and, recently, English literature. 
                        A family person, father of two fractious boys, therefore remote employment is preferred.
                    </p>
                    <br/>
                    <p>
                        Interested in the entire frontend spectrum and working on ambitious projects with positive people.
                    </p>
                </section>
            </div>
            <div className="styling">
                {/* <h1>Visit Rwanda</h1> */}
            </div>
        </div>
    )
}
