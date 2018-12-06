import React, {Component} from 'react';

export class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.refMap = React.createRef();
  }

  componentDidMount() {
    new window.google.maps.Map(this.refMap.current, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      }
    });
  }

  render() {
    return (<div style={{width: 250, height: 250}} id="map" className="map" ref={this.refMap} />)
  }
}
