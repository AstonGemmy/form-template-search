import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setActiveCategoryPageTemplates } from "../slices/template";

const Pagination = ({ totalItems, itemsPerPage = 12 }) => {
  const dispatch = useDispatch()
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [activePage, setActivePage] = useState(1)
  
  const decrementPage = () => (activePage > 1 && setActivePage(activePage - 1))
  const incrementPage = () => (activePage < totalPages && setActivePage(activePage + 1))

  useEffect(() => {
    dispatch(setActiveCategoryPageTemplates({
      page: activePage
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage])

  return (
    <>
      { Boolean(totalItems) && (
        <ul className="pagination">
          <li>
            <button onClick={decrementPage} className="prev-button" title="Prev Page Button">
              {activePage > 1 && <img src="./assets/svg/chevron-right.svg" alt="next-page-button" />}
              Prev
            </button>
          </li>

          <li className="pages">
            <button className="active" title="Page Button">
              { activePage }
            </button>
            <span>of</span>
            <button className="" title="Page Button">
              { totalPages }
            </button>
          </li>

          <li>
            <button onClick={incrementPage} className="next-button" title="Next Page Button">
              Next
              {activePage < totalPages && <img src="./assets/svg/chevron-right.svg" alt="next-page-button" />}
            </button>
          </li>
        </ul>
      )}
    </>
  )
}

export default Pagination;