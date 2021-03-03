import '../../scss/components/notfound.scss';
import Aliens from '../../assets/svg/aliens.svg';

const NotFound = () => {
    return(
        <div className="notfound">
            <img src={Aliens} alt=""/>
            <div>
                <p>Wh<span>oo</span>ps,<br/> that page is Gone </p>
                <button onClick={()=>window.location.assign('/')}>
                    Take me Home
                    <i className="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    )
}

export default NotFound;
