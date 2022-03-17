import './Status.scss';
import drone from '../assets/graphics/drone.svg';
import { Link} from "react-router-dom";

function Status(){
    
   
    return (
        <section className="container status">
            <p>Ordernummer <span className='orderID'> #12DV23F</span></p>
            <img src={drone} />
            <article className='status-box'>
                <h2>Din beställning är på väg!</h2>
                <Link
                    to={{
                        pathname: `/menu/`
                    }}
                    className="btn"
                >
                    Ok, cool!
                </Link>
            </article>
           
        </section>
    )
}
export default Status;