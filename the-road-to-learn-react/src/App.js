import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
import FormSearch from "./components/FormSearch"
import ListBook from "./components/ListBook"
import {
  DEFAULT_QUERY,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_PAGE,
} from './constant'
import Button from "./components/Button"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
    }
  }

  setSearchTopStories = result => {
    const {hits, page} = result
    const {searchKey, results} = this.state
    const oldHits = results && results[searchKey] ? results[searchKey].hits : []
    const updatedHits = [
      ...oldHits,
      ...hits
    ]
    this.setState({
      results: {
        ...results,
        [searchKey]: {hits: updatedHits, page}
      }
    })
  }

  fetchSearchTopStories = (searchTerm, page = 0) => {
    axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
      .then(result => this.setSearchTopStories(result.data))
      .catch(error => this.setState({error}))
  }

  needsToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm]
  }

  componentDidMount() {
    const {searchTerm} = this.state
    this.setState({searchKey: searchTerm})

    this.fetchSearchTopStories(searchTerm)
  }

  onSearchSubmit = (event) => {
    event.preventDefault()
    const {searchTerm} = this.state
    this.setState({searchKey: searchTerm})
    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm)
    }
  }

  onDismiss = id => {
    const {searchKey, results} = this.state
    const {hits, page} = results[searchKey]
    const updatedHits = hits.filter(item => item.objectID !== id)
    this.setState({
      results: {
        results,
        [searchKey]: {hits: updatedHits, page}
      }
    })
  }

  onSearchChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  render() {
    const {searchTerm, results, searchKey, error} = this.state
    const page = (results && results[searchKey] && results[searchKey].page) || 0
    const list = (results && results[searchKey] && results[searchKey].hits) || []

    if (error) {
      return <p>Somthing went wrong.</p>
    }

    return (
      <div className="page">
        <div className="interactions">
          <FormSearch valueSearch={searchTerm} onChange={this.onSearchChange} onSubmit={this.onSearchSubmit}/>
        </div>
        <ListBook
          list={list}
          onDismiss={this.onDismiss}
        />
        <div className="interactions">
          <Button onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
            More
          </Button>
        </div>
      </div>
    )
  }
}

export default App
