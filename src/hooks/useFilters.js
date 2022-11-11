// Hook
import { useDispatch } from "react-redux"

// Redux slices
import {
  setActiveCategoryTemplatesByName,
  sortActiveCategoryTemplatesByDate,
  sortActiveCategoryTemplatesByName
} from "../slices/template"

const useFilters = ({ searchInputRef, dateFilterRef, orderFilterRef }) => {
  const dispatch = useDispatch()

  const handleCategoryFilter = (value) => {
    // Clear search and all filters when new category is set
    searchInputRef.current.value = ''
    dateFilterRef.current.value = 'default'
    orderFilterRef.current.value = 'default'
    dispatch(setActiveCategoryTemplatesByName({ name: value }))
  }

  const handleOrderFilter = (value) => {
    // Clear Date filter when Order filter is active
    dateFilterRef.current.value = 'default'
    dispatch(sortActiveCategoryTemplatesByName({
      searchTerm: searchInputRef.current.value,
      order: value
    }))
  }

  const handleDateFilter = (value) => {
    // Clear Order filter when Date filter is active
    orderFilterRef.current.value = 'default'
    dispatch(sortActiveCategoryTemplatesByDate({
      searchTerm: searchInputRef.current.value,
      order: value
    }))
  }

  return { handleCategoryFilter, handleOrderFilter, handleDateFilter }
}

export default useFilters;