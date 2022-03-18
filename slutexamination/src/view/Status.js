import './Status.scss';
import drone from '../assets/graphics/drone.svg';
import { useDispatch, useSelector } from 'react-redux';
import { removeOrder } from '../actions/menuActions';
import { checkFetching } from '../actions/menuActions';

function Status({data,load}){
    console.log(data);
    const fetching = useSelector((state) => {return state.fetching});
    const dispatch = useDispatch();
    function restData(){
        dispatch(removeOrder(data))
        load();
        // dispatch(checkFetching(false))
    }
    console.log('status',fetching)
    return (
        <section className="container status">
            <p>Ordernummer <span className='orderID'> #{data.orderNr}</span></p>
            <img src={drone} />
            
            <article className='status-box'>
                <h2>Din beställning är på väg!</h2>
                <h4><span>{data.eta}</span> minuter</h4>
                <a className='btn' onClick={ restData }>Ok, cool!</a>
            </article>
           
        </section>
    )
}
export default Status;