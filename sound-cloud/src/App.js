import React from 'react';

import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';
import './App.css';

const tracks = [
  {
    title: 'Some track',
  },
  {
    title: 'Some other track',
  },
];
const store = configureStore();
console.log(store.getState());
store.dispatch(actions.setTracks(tracks));
console.log(store.getState());

function App() {
  return <Stream tracks={tracks} />;
}

export default App;
