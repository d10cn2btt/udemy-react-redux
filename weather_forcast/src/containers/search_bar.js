import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchWeather} from '../action';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  onInputChange(event, extraParam) {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
  }

  render() {
    return (
      <form onSubmit={() => this.onFormSubmit(event)} className="input-group">
        <input
          type="text"
          className="form-control"
          value={this.state.term}
          onChange={() => this.onInputChange(event, 'ExtraParam')}
        />
        <span className="input-group-btn">
          <button className="btn btn-primary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
