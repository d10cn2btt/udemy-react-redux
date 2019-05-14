import React from 'react'
import { Button } from 'react-bootstrap'

const FormAdd = ({submitForm}) => {
  let input = React.createRef()

  return (
    <form className="form-inline" action="" onSubmit={(e) => {
      e.preventDefault()
      if (input.current.value === '') {
        return
      }

      submitForm(input.current.value)
      input.current.value = ''
    }}>
      <div className="form-group mx-sm-2 mb-2">
        <input
          type="text"
          className="form-control"
          ref={input}
          placeholder="Todo"
          title="Tooltip on bottom"
        />
      </div>
      <Button className="btn btn-primary mb-2" variant="primary"><i className="fas fa-plus"></i></Button>
    </form>
  )
}

export default FormAdd
