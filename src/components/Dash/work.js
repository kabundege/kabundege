import '../../scss/components/work.scss';
import royal from '../../assets/images/royal.PNG';
import cinetie from '../../assets/images/cinetie.PNG';
import unsplash from '../../assets/images/unsplash.PNG';

const Work = () => {
    return(
        <div className="work">
            <img onClick={()=>window.open('https://royal.rw')}  src={royal} alt=""/>
            <img onClick={()=>window.open('https://cinetie.com')} src={cinetie} alt=""/>
            <img onClick={()=>window.open('https://unsplash--clone.herokuapp.com')} src={unsplash} alt=""/>
        </div>
    )
}

export default Work;