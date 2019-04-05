import React, { Component } from 'react'
import './App.css'
import FormSearch from "./components/FormSearch"
import ListBook from "./components/ListBook"

const list = [
  {
    title: 'React11',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {list, searchTerm: ''}
  }

  onDismiss = id => {
    const newState = this.state.list.filter(item => item.objectID !== id)

    this.setState({list: newState})
  }

  onSearchChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleSearch = searchTerm => {
    return item => item.title.toLowerCase().includes(searchTerm.toLowerCase())
  }

  render() {
    const {searchTerm, list} = this.state

    return (
      <div className="page">
        <div className="interactions">
          <FormSearch valueSearch={searchTerm} onChange={this.onSearchChange}/>
        </div>
        <ListBook
          list={list}
          searchTerm={searchTerm}
          onDismiss={this.onDismiss}
          handleSearch={this.handleSearch}
        />
      </div>
    )
  }
}

export default App
