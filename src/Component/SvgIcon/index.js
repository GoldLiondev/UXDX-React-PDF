import React, { Component } from "react";
import { View, Image as PdfImage, Text } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      pngSource: "",
    };
  }
  componentDidMount() {
    const xmlDoc = new DOMParser().parseFromString(
      `<svg class="w-6 h-6"  fill="#6569EC"
        stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>`,
      "image/svg+xml"
    );
    var svgString = new XMLSerializer().serializeToString(
      xmlDoc.querySelectorAll("svg")[0]
    );
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var DOMURL = window.URL || window.webkitURL || window;
    var img = new Image();
    var svg = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    var url = DOMURL.createObjectURL(svg);
    img.onload = () => {
      this.getImgData(ctx, url, canvas, DOMURL, img);
    };
    img.src = url;
  }

  getImgData(ctx, url, canvas, DOMURL, img) {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);
    var pngSource = canvas.toDataURL("image/png");
    this.setState({ pngSource });
    DOMURL.revokeObjectURL(url);
  }

  render() {
    const { pngSource } = this.state;

    return (
      <View
        style={{
          backgroundColor: "#6569EC",
          width: calcS(92),
          height: calcS(92),
          padding: calcS(20),
          borderRadius: calcS(5),
        }}
      >
        {pngSource === "" ? (
          <Text> </Text>
        ) : (
          <PdfImage
            style={{
              margin: "auto",
              objectFit: "contain",
            }}
            source={pngSource}
          ></PdfImage>
        )}
      </View>
    );
  }
}
