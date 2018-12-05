import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import {GoogleMap} from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humiditys = cityData.list.map(weather => weather.main.humidity);
    const {lat, lon} = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Chart data={temps} color='blue' unit='K' /></td>
        <td><Chart data={pressures} color='green' unit='hPa' /></td>
        <td><Chart data={humiditys} color='red' unit='%' /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (K)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    )
  }
}

function mapDispatchToProps({weather}) {
  return {weather}; // === {weather: weather}
}

export default connect(mapDispatchToProps)(WeatherList)