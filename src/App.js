import React from "react";
import { Document, Font } from "@react-pdf/renderer";
import Home from "./Pages/Home";
import Toc from "./Pages/Toc";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Page6 from "./Pages/Page6";
import Page7 from "./Pages/Page7";
import Last from "./Pages/Last";
Font.register({
  family: "OpenSansBold",
  src: "./assets/font/OpenSans-Bold.ttf",
});
Font.register({
  family: "SpenSansLight",
  src: "./assets/font/OpenSans-Light.ttf",
});
Font.register({
  family: "OpenSansRegular",
  src: "./assets/font/OpenSans-Regular.ttf",
});
Font.register({
  family: "SpenSansSemiBold",
  src: "./assets/font/OpenSans-SemiBold.ttf",
});
Font.register({
  family: "OpenSansItalic",
  src: "./assets/font/OpenSans-Italic.ttf",
});
Font.register({
  family: "OpenSansLightItalic",
  src: "./assets/font/OpenSans-LightItalic.ttf",
});
// Create Document Component
const App = () => (
  <Document>
    <Home />
    <Toc />
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    <Page6 />
    <Page7 />
    <Last />
  </Document>
);
export default App;
