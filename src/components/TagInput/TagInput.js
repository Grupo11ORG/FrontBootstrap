import { useEffect, useState } from 'react'
import './style.css'

const TagInput = ({ required = false, min = 0, max = 99999, tags, handle, suggestions = [], strict = false }) => {
  // const [tags, setTags] = useState([])
  const [elements, setElements] = useState([])
  const [input, setInput] = useState('')
  const [opSuggestions, setOpSuggestions] = useState([])
  const [alert, setAlert] = useState('')
  const [suggestedList, setSuggestedList] = useState([])

  //
  const delimiter = ['Enter', 'Tab', 'Period', 'Comma']
  const disabled = ['', '.', ',']

  // Escribe mientras no ingrese un valor que esté dentro de los delimitadores
  const handleChangeInputValue = (e) => {
    // guarda el ultimo caracter ingresado por el usuario
    const last_key = e.target.value[e.target.value.length - 1]
    const target_value = e.target.value

    // verifica si el ultimo caracter no está dentro de los delimitadores para actualizar el estado
    if (!disabled.includes(last_key)) {
      setInput(target_value)
    }

    if (strict) {
      [...suggestedList].some(sug => sug.includes(target_value)) || target_value === ''
        ? setAlert('')
        : setAlert('border border-danger')
    }
  }

  // verifica al presionar una tecla o clickear fuera del input
  const handleKeyCodeActions = (e) => {
    // verifica si la tecla presionada es la tecla de borrar y elimina el ultimo tag
    if (e.target.value.length === 0 && e.key === 'Backspace' && tags.length > 0) {
      handleDeleteTag()
    } else if (delimiter.includes(e.code) || e.type === 'blur') {
      // En caso contrario verifica si la tecla presionada está en la lista de delimitadores
      // O si clickea fuera del input para agregar el tag
      const input_value = handleFormatText(input)
      if (input_value.length > 0 && !disabled.includes(input_value)) {
        // eslint-disable-next-line no-unused-expressions
        strict
          ? [...suggestedList].includes(input_value) ? (handleAddTag(input_value), setAlert('')) : setAlert('border border-danger')
          : handleAddTag(input_value)
      }
    }
  }

  // Agrega un tag que no este incluido en la lista
  const handleAddTag = (value) => {
    const list_tags = [...tags]
    if (!list_tags.includes(value) && list_tags.length < max) {
      handleUpdateTags(value)
      setInput('')
    }
  }

  const handleTagDataList = (e) => {
    if (suggestedList.includes(e.target.value)) {
      handleAddTag(e.target.value)
      e.target.value = ''
    }
  }

  // Renderiza los tags de la lista
  const handleRenderTags = () => {
    const list = [...tags]
    const render = list.map((tag, key) =>
        <span
        key={'tag-' + key}
        className="badge bg-primary me-1 mb-1"
        >{tag}</span>
    ) //
    setElements(render)
  }

  // Elimina el ultimo tag al clickear backspace
  const handleDeleteTag = () => {
    handle([...tags.slice(0, -1)])
  }

  // Actualiza la lista de tags agregando uno
  const handleUpdateTags = (tag) => {
    handle([...tags, tag])
  }

  // Crea los options de la datalist con la lista de suggestions
  const handleSetSuggestions = () => {
    const list = [...suggestedList].filter(sug => sug.includes(input)).map((sug, key) =>
      <option key={'suggestion-' + key} value={sug} />
    )
    list.length = 3
    setOpSuggestions(list)
  }

  const handleUpdateSuggestions = () => {
    const newList = [...suggestions].filter(sug => ![...tags].includes(sug))
    setSuggestedList(newList)
  }

  // Formatea el texto al quitando letras mayusculas y caracteres especiales
  const handleFormatText = (value) => {
    const formated = value.trim().toLowerCase()
    return formated
  }

  // Renderiza y actualiza el estado cada que se agrega un nuevo tag
  useEffect(() => {
    handleRenderTags()
    handleUpdateSuggestions()
    handle(tags)
  }, [tags])

  useEffect(() => {
    if (suggestions.length > 0) {
      handleUpdateSuggestions()
    }
  }, [input])

  // Renderiza los options suggestion verificando para quitar los que ya están agregados como tags
  useEffect(() => {
    handleSetSuggestions()
  }, [suggestedList])

  // Formatea los tags en caso de que se cambien por otros
  useEffect(() => {
    if (suggestions.length > 0) {
      suggestions = suggestions.map(sug => handleFormatText(sug))
      handleUpdateSuggestions()
    } else {
      strict = false
    }
  }, [suggestions])

  return (
    <div className={`form-control d-flex bd-highlight flex-wrap ${alert}`}>
      {elements}
      <input
      value={input}
      required={required}
      placeholder="Escriba aquí para agregar tag..."
      type="text"
      list={suggestions.length > 0 ? 'tag-datalist' : ''}
      className="tag-input bd-highlight flex-fill" // flex-grow-1
      // autoComplete={autoComplete}
      onChange={(e) => handleChangeInputValue(e) }
      onKeyDown={(e) => handleKeyCodeActions(e) }
      onBlur={(e) => handleKeyCodeActions(e)}
      onInput={(e) => handleTagDataList(e)}
      />
      {
        suggestions.length > 0
          ? <>
            <datalist id="tag-datalist" >
              {opSuggestions}
            </datalist>
            </>
          : <></>
      }
    </div>
  )
}

export default TagInput
