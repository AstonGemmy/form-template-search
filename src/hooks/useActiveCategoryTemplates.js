import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Slices
import { getTemplates } from '../slices/template';

const useActiveCategoryTemplates = () => {
  const dispatch = useDispatch()
  const { isLoading, activeCategory } = useSelector((state) => state.template)
  
  //  Fetch templates on page load
  useEffect(() => {
    dispatch(getTemplates())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLoading, activeCategory }
}

export default useActiveCategoryTemplates;