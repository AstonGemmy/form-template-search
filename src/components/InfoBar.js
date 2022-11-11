const InfoBar = ({ isLoading }) => {
  return (
    <div className="info-bar">
      {isLoading && <p>Fetching templates...please wait</p>}
      {!isLoading && (
        <>
          <img src="/assets/svg/info.svg" alt="" />
          <p>
            Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates
          </p>
        </>
      )}
    </div>
  )
}

export default InfoBar;