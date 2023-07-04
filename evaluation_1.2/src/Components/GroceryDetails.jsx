import './GroceryItem.css'
import { useState } from "react";
import GroceryItem from "./GroceryItem";

const GroceryDeatils = () =>{
    const [data, setData] = useState([]);

    const handleFetch = () =>{
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`)
        .then((res) => res.json())
        .then((data) =>setData(data.data));
        console.log(data)
    };
    return(
        <>
        <h1>Groceries</h1>
        {
            data.length === 0 ? (
                <button className="get-groceries" onClick={handleFetch}>
               Get Groceries </button>
            ) : (
                <div data-cy = "container" class="grocery-container">
                    {data.length > 0 && 
                    data.map((item) => {
                        return <GroceryItem {...item} key={item.id}/>
                    })}
                </div>
            )}
        </>
    );
}
export default GroceryDeatils;