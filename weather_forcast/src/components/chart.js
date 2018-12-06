import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/(data.length));
}

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} limit={5} width={100} height={50} margin={5}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type='avg'/>
      </Sparklines>
      <div>{average(props.data)} {props.unit}</div>
    </div>
  )
}