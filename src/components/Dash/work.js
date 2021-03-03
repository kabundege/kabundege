import { useEffect } from 'react'
import '../../scss/components/work.scss';
import royal from '../../assets/images/royal.PNG';
import cinetie from '../../assets/images/cinetie.PNG';
import unsplash from '../../assets/images/unsplash.PNG';

const Work = () => {
    useEffect(()=>{

        const tags = document.querySelectorAll('.anim');
        const observer =  new IntersectionObserver(entries=>{
            for(const entry of entries){
                if(entry.intersectionRatio){
                        if(entry.target.classList[1] === 'left'){
                            entry.target.style.animation =  "animLeft 1s forwards ease-out"
                        }
                        else if(entry.target.classList[1] === 'right'){
                            entry.target.style.animation = "animRight 1s forwards ease-out"
                        }
                        else{
                            entry.target.style.animation = "animUp 1s forwards ease-out";
                        }
                }
                else{
                    entry.target.style.animation = ""
                }
            }
        })
        
        for(const tag of tags){
            observer.observe(tag)
        }

    },[]);
    return(
        <div className="work">
            <img className="anim right" onClick={()=>window.open('https://royal.rw')}  src={royal} alt=""/>
            <img className="anim" onClick={()=>window.open('https://cinetie.com')} src={cinetie} alt=""/>
            <img className="anim left" onClick={()=>window.open('https://unsplash--clone.herokuapp.com')} src={unsplash} alt=""/>
        </div>
    )
}

export default Work;
