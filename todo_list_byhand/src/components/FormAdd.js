import React from 'react'

const FormAdd = () => {
  return (
    <div className="form-inline">
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="inputPassword2" className="sr-only">Password</label>
        <input type="password" className="form-control" id="inputPassword2" placeholder="Todo" />
      </div>
      <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
    </div>
  )
}

export default FormAdd
