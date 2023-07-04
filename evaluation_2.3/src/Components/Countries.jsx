import { useEffect, useState } from "react"
import LoadingIndicator from "./LoadaingIndicator"
import CountriesCard from "./CountriesCard"
import Pagination from "./Pagination"

const Countries = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()

    const fetchData = (page) => {
        return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/
        get-countries?page=${page}&limit=10`).then((res) => res.json())
    };
    useEffect(() => {
        setLoading(true);
        fetchData(page).then((res) => {
            setData(res.data)
            setTotalPages(res.totalPages)
            setLoading(false)
        });
    }, [page]);

    const onChange = (val) => {
        const changeBy = page + val;
        setPage(changeBy)
    }
    return loading ? (<LoadingIndicator />) : (
        <div>
            <h1>
                Welcome to My Country
            </h1>
            <div>
                {data ?.map((country) =>(
                    <CountriesCard
                    key={country.id}
                    country={country.country}
                    population={country.population}
                    />
                ))}
            </div>
            <div>
                <Pagination current={page} total={totalPages}
                onChange={onChange}/>
            </div>
        </div>
    )
}
export default Countries