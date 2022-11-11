const ActiveCategoryStat = ({ categoryName = 'All', categoryTemplateCount = 0 }) => {

  return (
    <div className="active-category-stat">
      <h3 data-testid="template-card-header" className="active-category-title">
        { categoryName } Templates
      </h3>
      <h3 className="active-category-template-count">
        { categoryTemplateCount } templates
      </h3>
    </div>
  )
}

export default ActiveCategoryStat;