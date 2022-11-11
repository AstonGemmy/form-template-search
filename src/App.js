// Styles
import './styles/App.css';

// Hooks
import useActiveCategoryTemplates from './hooks/useActiveCategoryTemplates';

// Components
import Filters from './components/Filters';
import InfoBar from './components/InfoBar';
import Templates from './components/Templates';
import Pagination from './components/Pagination';
import ActiveCategoryStat from './components/ActiveCategoryStat';
import ResponseFeedbackDisplay from './components/ResponseFeedback';

const App = () => {
  const { isLoading, activeCategory } = useActiveCategoryTemplates()
  
  // if (isLoading) return <ResponseFeedbackDisplay target="get-templates" />

  return (
    <div className="app-container">
      <div className="container">
        <h2 className="app-header">Form Template Search Interface</h2>
      </div>
      
      <div className='filter-container'>
        <Filters />
      </div>
      
      <div className="container">
        <InfoBar />
        <ActiveCategoryStat
          categoryName={ activeCategory.name }
          categoryTemplateCount={ activeCategory.templates.length }
        />

        <Templates isLoading={ isLoading } templates={ activeCategory.activePageTemplates } />
        
        <Pagination
          totalItems={ activeCategory.templates.length }
          itemsPerPage={ activeCategory.templatesPerPage }
        />
      </div>
    </div>
  )
}

export default App;