import './Loading.scss';
import coffee from '../assets/graphics/loader.png';


function Loading(){
  
    return (
        <section className="container loading">
            <h2>Laddar drönare...</h2>
           <img src={coffee}/>
        </section>
    )
}
export default Loading;