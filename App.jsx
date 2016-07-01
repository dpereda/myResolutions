import React from 'react';
import ReactDom from 'react-dom';

Resolutions = new Mongo.Collection("resolutions");

export default class App extends React.Component {
  render() {
    return (
        <h1> Hello World </h1>
    )
  }
}
