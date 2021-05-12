import React, { Component } from "react";
import data from "./utils/temp";
import PDFPublisher from "./PDFPublisher";
export default class App extends Component {
  render() {
    return <PDFPublisher data={data} />;
  }
}
