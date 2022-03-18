import add from '../assets/graphics/add.svg';
import { menuChoise } from '../actions/menuActions';
import { useDispatch} from 'react-redux';

function MenuItem({data}){
    const dispatchD = useDispatch();
    function saveChoies(){
        
        dispatchD(menuChoise(data));
        
        
    }
    return(
        <li className='menu-item'>
            <a className='menu-link' onClick={ saveChoies }>
                <img src={ add }/>
            </a>
            <div className="menu-box">
                <h3>{data.title}</h3>
                <span className='price'>{data.price} kr</span>
                <div className='menu-info'>
                    <p>{data.desc}</p>
                </div>
            </div>
        </li>
    )
}
export default MenuItem;