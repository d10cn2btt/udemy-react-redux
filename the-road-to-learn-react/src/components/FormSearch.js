import React from 'react'

const FormSearch = ({valueSearch, onChange}) => (
  <form>
    <input value={valueSearch} type="text" onChange={onChange}/>
  </form>
)

export default FormSearch
