const Pagination = ({ postPerPage, totalPost, setCurrentPage }) => {
    let pages = []
    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i)
    }
    return (
        <div>
            {
                pages.map((item, index) => {
                    return (
                        <div className="pagination">
                            <button className="pagination-button" key={index} onClick={() => setCurrentPage(item)}>{item}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Pagination