import TemplateCard from "./TemplateCard"

const Templates = ({ isLoading, templates }) => {
  const randomizeKey = (key) => `${key}-${Math.random()}`

  if (isLoading) return 'LOADING TEMPLATES'

  return (
    <div className="template-card-wrapper">
      {
        templates.map(template => {
          return <TemplateCard { ...template } key={ randomizeKey(template.name) } />
        })
      }
    </div>
  )
}

export default Templates;