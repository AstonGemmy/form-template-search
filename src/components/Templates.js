import TemplateCard from "./TemplateCard"

const Templates = ({ isLoading, templates }) => {
  const randomizeKey = (key) => `${key}-${Math.random()}`

  return (
    <div className="template-card-wrapper">
      {!isLoading && (
        templates.map(template => {
          return <TemplateCard { ...template } key={ randomizeKey(template.name) } />
        })
      )}
    </div>
  )
}

export default Templates;