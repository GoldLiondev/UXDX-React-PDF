import React, { Component } from "react";
import { PDFViewer, Document, Font } from "@react-pdf/renderer";
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
import isEmpty from "./utils/isEmpty";

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
export default class PDFPublisher extends Component {
  render() {
    const { data } = this.props;
    let page1_quoteData = "",
      page2_quoteData = "",
      page3_quoteData = "",
      page2_galleryData = "",
      page4_tabledata = "",
      page4_galleryData = "",
      page5_optionsData = "",
      page6_tabledata = "",
      page7_maindata = "",
      page8_galleryData = "";
    if (!isEmpty(data)) {
      page1_quoteData = data.testimonials.nodes[1];
      page2_quoteData = data.testimonials.nodes[0];
      page3_quoteData = data.testimonials.nodes[2];
      page2_galleryData = data.partners.nodes.map((e) => {
        return { url: e.data.Company_Logo[0].url };
      });
      page4_tabledata = data.conferences.nodes;
      page4_galleryData = data.companies.nodes.map((item) => {
        return { url: item.data.Company_Logo[0].url };
      });
      page5_optionsData = data.products.nodes;
      page6_tabledata = data.products.nodes;
      page7_maindata = data.caseStudies.nodes;
      page8_galleryData = data.salesPeople.nodes.map((item) => {
        return {
          url: item.data.Image[0].url,
          Name: item.data.Name,
          Job_Title: item.data.Job_Title,
          Email: item.data.Email,
        };
      });
    }

    return isEmpty(data) ? (
      <div>Please Wait</div>
    ) : (
      <PDFViewer width="1240px" height="1754px">
        <Document>
          <Home />
          <Toc />
          <Page1 quoteData={page1_quoteData} />
          <Page2 quoteData={page2_quoteData} galleryData={page2_galleryData} />
          <Page3 quoteData={page3_quoteData} />
          <Page4 tabledata={page4_tabledata} galleryData={page4_galleryData} />
          <Page5 optionsData={page5_optionsData} />
          <Page6 tabledata={page6_tabledata} />
          <Page7 maindata={page7_maindata} />
          <Last galleryData={page8_galleryData} />
        </Document>
      </PDFViewer>
    );
  }
}
