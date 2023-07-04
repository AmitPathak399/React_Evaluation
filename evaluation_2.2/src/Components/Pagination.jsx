const Pagination = ({ totalPages, handlePageChange, currentPage }) => {
    return (new Array(totalPages).fill(0).map((a, i) => {

        // <>
        return (
            <button
                style={{
                    backfaceVisibility: currentPage ===
                        i + 1 ? "gray" : null
                }}
                disabled={currentPage === i + 1}
                onClick={() => handlePageChange(i + 1)}>
                {i + 1}
            </button>
        )
        // </>
    })
    )
}
export default Pagination;