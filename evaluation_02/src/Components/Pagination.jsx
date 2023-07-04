const Pagination = ({ current, onChange, total }) => {
    let btnArr = new Array(total).fill(0)
    return (
        <>
            {
                btnArr.map((ele, index) => {
                    return (
                        <button
                            key={index + Math.random()}
                            style={{
                                margin: "0.5rem",
                                padding: "0.5rem",
                                borderColor: current == index + 1 && "red",
                                borderRadius:  "5px",
                            }}
                            onClick={() => onChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    );
                })
            }
        </>
    )

}
export default Pagination;