import React from 'react'
import '../../scss/components/home.scss';

export default () => {
    const heading = ['H','i',',','i','\'','m',' c','h','r','i','s','s','\,','S','o','f','t','w','a','r','e','  d','e','v','.'];
    return (
        <div className="parent">
            <div className="content">
                <div> 
                    <h1>
                        { heading.map((letter,index)=>{
                            if(3 - index !== 1 && 13 - index !== 1){
                                if(letter===' c')
                                return<span className="BigC">{letter}</span>
                                return <span>{letter}</span>
                            }else{
                                return <><span>{letter}</span><br/></>
                            }
                        })}
                    </h1>
                    <p>FrontEnd | BackEnd | Mobile - Expert</p>
                </div>
            </div>
            <div className="styling">

            </div>
        </div>
    )
}
