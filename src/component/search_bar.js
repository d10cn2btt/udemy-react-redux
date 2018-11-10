import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  onInputChange(event) {
    this.props.onSearchTermChange(event.target.value);
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <div className="search-bar">
        <input type="text" size="25" value={this.state.term}
               // onChange={this.onInputChange.bind(this)}
               onChange={event => this.onInputChange(event)}
        />
        {/*React.createElement*/}
        <br/>
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;