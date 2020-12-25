import React from 'react';
import me from '../../assets/new.png';
import { motion } from 'framer-motion';
import blob from '../../assets/blob.svg';
import '../../scss/components/home.scss';
import '../../scss/components/about.scss';

export default () => {
    const heading = ['A','b','o','u','t',' ','m','e','.'];
    const nextVariants = {
        hidden: { 
          x: '-100vw' 
        },
        visible: {
          x: 0,
          transition: { type: 'spring', stiffness: 120 }
        },
        exit: {
          x: "-100vh",
          transition: { ease: 'easeInOut' }
        }
    }   
    return (
        <div className="parent about">
            <motion.div
                variants={nextVariants} 
                initial="hidden"
                animate="visible"
                exit="exit" 
                className="content">
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
                        Fan & player of blues<span role="img" aria-label="visible"> 🎸 </span> , outdoor activities  <span role="img" aria-label="visible">🏀</span>, TV series and English literature.
                    </p>
                    <br/>
                    <p>
                        Interested in the entire development spectrum and working on ambitious projects with positive people.
                    </p>
                </section>
            </motion.div>
            <div className="styling">
                <img src={blob} alt="blob" className="blob"/>
                <img src={me} alt="me" className="avatar"/>
            </div>
        </div>
    )
}
