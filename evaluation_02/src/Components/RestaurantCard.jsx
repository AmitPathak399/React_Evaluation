const RestaurantCard = ({name,image, type,rating,price_starts_from,number_of_votes}) =>{
    return(
        <>
        <div style={{
            // gridTemplateColumns:"repeat(4,1f4)",
        }}>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                NAME : <b>{name}</b>
            </div>
            <div>
                Type : <b>{type}</b>
            </div>
            <div>
                Price : <b>{price_starts_from}</b>
            </div>
            <div>
                Ratting : <b>{rating}</b>
            </div>
            <div>
                Votes : <b>{number_of_votes}</b>
            </div>
        </div>
        </>
    );
};
export default RestaurantCard; 