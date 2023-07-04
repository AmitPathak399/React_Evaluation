import { useState } from "react";
import CoffeeItem from "./CoffeeItem";

const CoffeeDetails = () => {
    const [data, setData] = useState([]);
    const [order, setOrder] = useState([]);
    const fetchAndUpdateData = () => {
        fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`)
            .then((res) => res.json())
            .then((res) => setData(res.data));
    };
    const placeOrder = (orderItem) => {
        setOrder([...order, orderItem])
    };

    const cancleOrder = (orderId) => {
        const updateOrder = order.filter((orderItem) => orderItem.id !== orderId)
        setOrder(updateOrder)
    };
    const totalPrice = order.reduce((acc, curr) => acc + curr.price, 0);
    console.log(totalPrice)

    return (
        <div>
            <h1>Coffee House</h1>
            {data.length === 0 && (
                <button className="get_coffee" onClick={fetchAndUpdateData} >
                    Get Coffee
                </button>
            )}
            {data.length !== 0 && (
                <div data-cy="container"
                    style={{
                        width:"auto",
                        height:"auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(4,1fr)",
                        gap: "25px"
                    }}
                >
                    {data.map((coffee) => (
                        <CoffeeItem
                            key={coffee.id}
                            id={coffee.id}
                            title={coffee.title}
                            image={coffee.image}
                            price={coffee.price}
                            placeOrder={placeOrder}
                            order = { order }
                            cancleOrder = { cancleOrder }
                        />
                    ))}
                </div>
            )}
            {totalPrice > 0 && <h6> Total cost : {totalPrice}</h6>}
        </div>
    );
};
export default CoffeeDetails;