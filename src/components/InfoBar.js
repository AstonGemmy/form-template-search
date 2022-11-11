const InfoBar = ({ isLoading, hasTemplates }) => {
  return (
    <div className="info-bar">
      {/* If templates fetch is in progress */}
      {isLoading && <p>Fetching templates...please wait</p>}
      
      {/* If no templates and not fetching, search result must have had no results */}
      {((!isLoading && !hasTemplates) && <p>No search results</p>)}
      
      {/* If templates fetch is completed and templates are available */}
      {(!isLoading && hasTemplates) && (
        <>
          <img src="./assets/svg/info.svg" alt="" />
          <p>
            Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates
          </p>
        </>
      )}
    </div>
  )
}

export default InfoBar;