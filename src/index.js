import React from "react";
import ReactDOM from "react-dom";
import { PDFViewer } from "@react-pdf/renderer";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

ReactDOM.render(
  <PDFViewer width="2480px" height="3508px">
    {/* // <PDFViewer width="1240px" height="850px"> */}
    <App />
  </PDFViewer>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
