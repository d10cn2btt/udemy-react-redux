import React from 'react'

const FormSearch = ({valueSearch, onChange, onSubmit}) => (
  <form onSubmit={onSubmit}>
    <input value={valueSearch} type="text" onChange={onChange}/>
    <button type="submit">
      Search
    </button>
  </form>
)

export default FormSearch
