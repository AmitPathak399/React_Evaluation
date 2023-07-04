import { useEffect,useState } from "react";
// import LodingIndicator from "./LodingIndicator";
import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";
import LodingIndicator from "./LoadingIndicator";
const getRestaurants = ({ page = 1 }) =>{
    return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=`+page)
    .then((res) => res.json());
}

function Restaurants(){
    const [isLoading, setLoading] = useState(false);
    const [data,setData] = useState({})
    const [page, setPage] = useState(1)

    useEffect(()=>{
        handleGetRestaurants(page)
    },[page]);

    const handleGetRestaurants = (page) =>{
        setLoading(true)
        getRestaurants({ page })
            .then((res) =>{
                setData(res);
                setLoading(false)
            })
    };
    

    return(
        <>
        <h1>Restaurants Lists</h1>
        <div className="main-container">
        {data ?.data ?.map((item)=>(
            <RestaurantCard key = {item.id}
            {...item}/>
        ))}
        </div>
        <div>
        <Pagination
        current={page}
        total={data.totalPages}
        onChange={(value)=>setPage(value)}
        />
        </div>
        </>
    )
}
export default Restaurants;