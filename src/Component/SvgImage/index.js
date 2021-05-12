import React, { Component } from "react";
import { View, Image as PdfImage, Text } from "@react-pdf/renderer";
import isEmpty from "../../utils/isEmpty";
import { calcS } from "../../utils/calcSize";
export default class index extends Component {
  constructor() {
    super();
    this.state = {
      pngSource: "",
    };
  }
  componentDidMount() {
    fetch(this.props.url)
      .then((response) => response.text())
      .then((res) => {
        const xmlDoc = new DOMParser().parseFromString(
          res.trim(),
          "image/svg+xml"
        );
        const myImgFlag = isEmpty(this.props.isImage)
          ? false
          : this.props.isImage;

        if (!myImgFlag)
          xmlDoc
            .querySelectorAll("svg")[0]
            .setAttribute("style", "filter:grayscale(100%)");
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
      });
  }

  getImgData(ctx, url, canvas, DOMURL, img) {
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const myCaseFlag = isEmpty(this.props.isCase) ? false : this.props.isCase;

    if (!myCaseFlag) ctx.scale(0.9, 0.9);
    ctx.drawImage(img, 0, 0);
    var pngSource = canvas.toDataURL("image/png");
    this.setState({ pngSource });
    DOMURL.revokeObjectURL(url);
  }

  render() {
    const { pngSource } = this.state;
    const { width, height, isImage, marginRight, marginTop, isCase } =
      this.props;
    const myHeight = isEmpty(height) ? 100 : height;
    const myImgFlag = isEmpty(isImage) ? false : isImage;
    const myWidth = isEmpty(width) ? 100 : width;
    const myMarginTop = isEmpty(marginTop) ? 0 : marginTop;
    const myMarginRight = isEmpty(marginRight) ? 0 : marginRight;

    const myCaseFlag = isEmpty(isCase) ? false : isCase;

    return (
      <View
        style={{
          backgroundColor: myImgFlag ? "" : "#FAFAFA",
          width: calcS(myWidth),
          height: calcS(myHeight),
          marginTop: calcS(myMarginTop),
          padding: myImgFlag ? calcS(30) : calcS(50),
          marginRight: myMarginRight,
        }}
      >
        {pngSource === "" ? (
          <Text> </Text>
        ) : myCaseFlag ? (
          <PdfImage
            style={{
              maxHeight: "280px",
              margin: "auto",
              objectFit: "cover",
            }}
            source={pngSource}
          ></PdfImage>
        ) : (
          <PdfImage
            style={{
              margin: "auto",
              objectFit: "contail",
              opacity: myImgFlag ? 1 : 0.7,
            }}
            source={pngSource}
          ></PdfImage>
        )}
      </View>
    );
  }
}
