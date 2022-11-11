// Core module
import PropTypes from 'prop-types'

const TemplateCard = ({ name, description, link }) => {
  
  return (
    <div className="template-card">
      <div className="template-card-title">
        <h4>{ name }</h4>
      </div>

      <div className="template-card-body">
        <p>{ description }</p>
      </div>

      <a href={link} className="template-card-footer">
        Use Template
      </a>
    </div>
  )
}

TemplateCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
}

export default TemplateCard;