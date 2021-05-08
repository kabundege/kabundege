import React from 'react';
import me from '../../assets/images/avatar.png';
import '../../scss/components/home.scss';

const Home = () => {
    const heading = ['H','i',',','i','\'','m',' c','h','r','i','s','s',',','a ','S','o','f','t','w','a','r','e','  d','e','v','.'];

    return (
        <div className="parent">
            <div  
                className="content">
                <div> 
                    <h1>
                        { heading.map((letter,index)=>{
                            if(letter!==','){
                                if(letter===' c')
                                return<span className="BigC">{letter}</span>
                                return <span>{letter}</span>
                            }else{
                                return <><span>{letter}</span><br/></>
                            }
                        })}
                    </h1>
                    <p>FrontEnd | BackEnd | Mobile <span role="img" aria-label="rocket">🚀</span> Expert </p>
                </div>
            </div>
            <div className="styling">
                <section className="anim"> 
                    <span>👋</span> Hi there!
                </section>
                <img src={me} alt="me" className="avatar"/>
            </div>
        </div>
    )
}

export default Home;
