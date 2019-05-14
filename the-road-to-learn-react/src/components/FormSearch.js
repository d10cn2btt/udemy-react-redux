import React, { Component } from 'react'

class FormSearch extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus()
    }
  }

  render() {
    const {valueSearch, onChange, onSubmit} = this.props

    return (
      <form onSubmit={onSubmit}>
        <input value={valueSearch} type="text" onChange={onChange} ref={el => this.input = el}/>
        <button type="submit">
          Search
        </button>
      </form>
    )
  }
}

export default FormSearch
