const fetch = require('jest-fetch-mock');

global.fetch = fetch;
global.React = require('react');

global.__BROWSER__ = false;

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
