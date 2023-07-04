import PlaceOrderBtn from "./PlaceOrderBtn";

const CoffeeItem = ({
    id,
    title,
    image,
    price,
    placeOrder,
    cancleOrder,
    order,
}) => {
    return(
        <div className="coffee_card"
        style={{border:"1px solid black",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        padding:"10px"
         }}
        >
            <img src={image} alt={title} width={200} height={200}/>
            <h3>{title}</h3>
            <h5>{price}</h5>
            <PlaceOrderBtn
            orderPlace={
                order.filter((el) => el.id === id).length > 0 ? true : false
            }
            placeOrder={() => placeOrder({id,title,price})}
            cancleOrder={() => cancleOrder({id})}
            />
        </div>
    )
}
export default CoffeeItem;