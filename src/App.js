// Style
import './styles/App.css';

// Hook
import useActiveCategoryTemplates from './hooks/useActiveCategoryTemplates';

// Components
import Filters from './components/Filters';
import InfoBar from './components/InfoBar';
import Templates from './components/Templates';
import Pagination from './components/Pagination';
import ActiveCategoryStat from './components/ActiveCategoryStat';

const App = () => {
  const {
    isLoading,
    activeCategory: {
      name,
      templates,
      templatesPerPage,
      activePageTemplates
    }
  } = useActiveCategoryTemplates()

  return (
    <div className="app-container">
      
      <div className="container">
        <h2 className="app-header">Form Template Search Interface</h2>
      </div>
      
      <Filters />
      
      <div className="container">        
        <InfoBar
          isLoading={ isLoading }
          hasTemplates={Boolean(activePageTemplates.length)} />
        
        <ActiveCategoryStat
          categoryName={ name }
          categoryTemplateCount={ templates.length }
        />

        <Templates isLoading={ isLoading } templates={ activePageTemplates } />
        
        <Pagination
          totalItems={ templates.length }
          itemsPerPage={ templatesPerPage }
        />
      </div>
    </div>
  )
}

export default App;