// Core modules
import PropTypes from 'prop-types'
import React from "react";

const SearchInput = React.forwardRef(({ id, defaultValue, getValue, isFilterOpen }, ref) => {

  return (
    <input
      data-testid={id}
      defaultValue={defaultValue}
      id={id}
      ref={ref}
      type="text"
      onChange={(e) => getValue(e.target.value)}
      className={`${(isFilterOpen && 'is-filter-open ')} search-input`}
      placeholder="Search Templates"
    />
  )
})

SearchInput.propTypes = {
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  getValue: PropTypes.func,
  isFilterOpen: PropTypes.bool
}

export default SearchInput;