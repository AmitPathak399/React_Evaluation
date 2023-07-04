const placeOrderBtn = ({ placeOrder, orderPlace, cancleOrder }) => {
    return (
        <div>
            <button
                disabled={orderPlace}
                className="place_order_button"
                onClick={placeOrder}
            >
                {orderPlace ? "order place" : "Place Order"}
            </button>
            {orderPlace && (
                <button className="cancle_order_button" onClick={cancleOrder}>Cancel Order</button>
            )}
        </div>
    )
}

export default placeOrderBtn;