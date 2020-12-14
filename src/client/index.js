import React from 'react';
import ReactDOM from 'react-dom';
import { ThemedApp } from './components/ThemedApp';

const target = document.getElementById('app');
ReactDOM.render(<ThemedApp />, target);

if (module.hot) {
  module.hot.dispose(function () {});
  module.hot.accept(function () {});
}
