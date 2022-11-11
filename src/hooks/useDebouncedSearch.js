import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchActiveCategoryTemplates } from "../slices/template";

const useDebouncedSearch = () => {
  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  // Update 'term' value after half a second from the last update of 'debouncedTerm'
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(debouncedTerm)
    }, 500);

    return () => clearTimeout(timer);
  }, [debouncedTerm])

  // submit a new search
  useEffect(() => {
    dispatch(searchActiveCategoryTemplates({ searchTerm }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return { debouncedTerm, setDebouncedTerm }
}

export default useDebouncedSearch;