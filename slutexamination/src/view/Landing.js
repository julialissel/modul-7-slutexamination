import './Landing.scss'
import Logo from '../assets/graphics/airbean-landing.svg';
import leaf_right from '../assets/graphics/intro-graphic-right.svg';
import leaf_left from '../assets/graphics/intro-graphic-left.svg';
import { Link} from "react-router-dom";

function Events(){

    
    return (
        <section className=" container landing">
            <img className="leaf" src={ leaf_left }/>
            <Link 
                to={{
                    pathname: `/menu/`
                }}
            >
                <img src={ Logo }/>
            </Link>
            <img className="leaf" src={ leaf_right }/>
        </section>
    )
}
export default Events;