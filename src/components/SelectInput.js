import React from "react";

const SelectInput = React.forwardRef(({ id, defaultValue, label, options, getSelection }, ref) => {
  return (
    <div className="select-input">
      <label htmlFor={ id }>
        { label }
      </label>

      <select ref={ ref } data-testid={ id } onChange={(e) => getSelection(e.target.value)} id={ id }>
        {
          options.map(option => {
            return (
              <option key={ option.text } value={ option.value } defaultValue={ defaultValue === option.value }>
                { option.text }
              </option>
            )
          })
        }
      </select>
    </div>
  )
})

export default SelectInput;