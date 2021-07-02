import { useParams } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({item})  => {
    const { id } =  useParams()
    console.log("dsad",id)
    const addZero = (num) => {
        let number = num.toString();
        let decimal = (number.length < 2) ? `${number}.000` :
        (number.length < 3) ? `${number}.00` :
        `${number}`;
        return decimal;   
    }

return (
    <>
    {
        console.log(item),
        typeof item !== "string" ? (
            item.filter((item) => item.id === id)
            .map((item) =>  (
                <div key={item.id} class="item-detail">
                    <div>
                    <a>
                <img src={item.pictureUrl} />
                </a>
                    </div>
                <div>
                <p className="name-card">{item.title } ({item.duration})</p>
                <p className="description-card">{item.description }</p>
                <p>Price: $ {addZero(item.price) }</p>
                <ItemCount stock={5} initial={1} onAdd/>
                </div>
                
                </div>
                
             ))
            
        ) : <p>{item}</p>
    }
    </>
   
); 
}