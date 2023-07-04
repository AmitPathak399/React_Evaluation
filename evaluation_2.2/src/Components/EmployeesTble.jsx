import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const getData = (url) => {
    return fetch(url).then((res) => res.json());
}
const EmployeesTable = () => {

    const [data, setData] = useState([]);
    const [department, setDepartment] = useState("");
    const [totalPages, setTotalPages] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchAndUpdateData = async () => {
            try {
                if (department) {
                    let { data, totalPages } = await getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=10&
                    filterBy=department&filterValue=${department}`);
                    setData(data)
                    setTotalPages(totalPages);
                }
                else {
                    let { data, totalPages } = await getData(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=10`);
                    setData(data)
                    setTotalPages(totalPages)
                }
            }
            catch (err) {
                throw new Error(`something went wrong`)
            }
        }
        fetchAndUpdateData()
    }, [page, department]);

    const handlePageChange = (page) => {
        setPage(page)
    };

    const handleFilter = (e) => {
        setDepartment(e.target.value);
        setDepartment(1)
    };

    return (<div>
        <div className="controls">
            <div>
                <select className="department_list"
                    onChange={handleFilter}
                    value={department}
                >
                    <option value="">Select Department</option>
                    <option value="hr">HR</option>
                    <option value="finance">Finance</option>
                    <option value="marketing">Marketing</option>
                    <option value="engineering">Engineering</option>
                    <option value="operations">Operations</option>
                </select>
            </div>
        </div>
        <div className="table_container">
            <table>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {data.map((ele) => (
                        <tr className="row"
                            key={ele.id}>
                            <td>{ele.id}</td>
                            <td className="name">{ele.name}</td>
                            <td className="gender">{ele.gender}</td>
                            <td className="department">{ele.department}</td>
                            <td className="salary">{ele.salary}</td>
                        </tr>
                    ))};
                </tbody>
            </table>
        </div>
        {totalPages && (
            <Pagination
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                currentPage={page}
            />
        )}
    </div>
    )
}
export default EmployeesTable;