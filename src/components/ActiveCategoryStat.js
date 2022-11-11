import PropTypes from 'prop-types'

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

ActiveCategoryStat.propTypes = {
  categoryName: PropTypes.string,
  categoryTemplateCount: PropTypes.number
}

export default ActiveCategoryStat;