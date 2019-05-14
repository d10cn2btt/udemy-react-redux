import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import _ from 'lodash';
import ReCAPTCHA from "react-google-recaptcha";

import {fetchWeather, moveCity} from '../action';

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
    const position = _.findIndex(this.props.weather, (data) => {
      return data.city.name.toLowerCase() === this.state.term.toLowerCase();
    });

    this.setState({term: ''});
    position >= 0 ? this.props.moveCity(position) : this.props.fetchWeather(this.state.term);
  }

  render() {
    return (
      <div>
        <ReCAPTCHA
          sitekey="6LeiP5EUAAAAANIv7fgM1bR8Kse-Y2KgmeA1Fws0"
          onChange={(value) => console.log(value)}
        />
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
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather, moveCity}, dispatch);
}

function mapStateToProps({weather}) {
  return {weather}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
