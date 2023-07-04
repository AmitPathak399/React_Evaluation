import './GroceryItem.css'
import CartButton from "./CartButton";
import {useState} from "react";
const GroceryItem = (props) =>{
let [count, setCount] = useState(0);
let {name,price,image} = props;

const handleCount = (payload) => {
    setCount((prev) => prev + payload)
}
return(
    <div classname = "grocery_card">
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <h5>{price}</h5>
        {
            count ? (
                <CartButton handleCount = {handleCount} count={count}/>
            ) :
            (
                <button 
                data-cy = "add_to_cart"
                onClick={()=> setCount((count) => count + 1)}>   
               Add to Cart </button>
            )
        }
    </div>
)

}
export default GroceryItem;