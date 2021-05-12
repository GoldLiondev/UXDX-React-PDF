import React, { Component } from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import isEmpty from "../../utils/isEmpty";
import { calcS } from "../../utils/calcSize";
import SvgImage from "../SvgImage";
export default class index extends Component {
  render() {
    let {
      cols,
      data,
      width,
      imgHeight,
      spacing,
      mBottom,
      cusFlag,
      logo,
      isSVGImage,
    } = this.props;
    if (isEmpty(cols)) cols = 3;
    if (isEmpty(width)) width = 1892;
    if (isEmpty(imgHeight)) imgHeight = 100;
    if (isEmpty(spacing)) spacing = 20;
    if (isEmpty(mBottom)) mBottom = 5;
    if (isEmpty(cusFlag)) cusFlag = false;
    if (isEmpty(logo)) logo = false;
    if (isEmpty(isSVGImage)) isSVGImage = false;

    if (isEmpty(data)) return <Text>There is no image</Text>;
    const imgWidth = (width + spacing) / cols - spacing;
    let container = [];
    for (let index = 0; index < data.length; index += cols) {
      if (isEmpty(data[index])) break;
      let temp = [];
      for (let i = 0; i < cols; i++) {
        if (isEmpty(data[i + index])) break;
        if (cusFlag) {
          temp.push(
            <View key={"image" + (i + index)}>
              <Image
                style={{
                  objectFit: "cover",
                  width: calcS(imgWidth),
                  height: calcS(imgHeight - 130),
                  marginRight: calcS(spacing),
                  borderRadius: calcS(20),
                }}
                src={data[i + index].url}
                alt="images"
              />
              <Text
                style={{
                  marginTop: calcS(5),
                  fontFamily: "OpenSansBold",
                  fontSize: calcS(35),
                }}
              >
                {data[i + index].Name}
              </Text>

              <Text
                style={{
                  marginTop: calcS(5),
                  fontFamily: "SpenSansSemiBold",
                  fontSize: calcS(30),
                }}
              >
                {data[i + index].Email}
              </Text>
              <Text
                style={{
                  marginTop: calcS(5),
                  fontWeight: 300,
                  fontSize: calcS(30),
                  color: "#5A3EF1",
                  fontFamily: "SpenSansSemiBold",
                }}
              >
                {data[i + index].Job_Title}
              </Text>
            </View>
          );
        } else {
          let dataurl = data[i + index].url;
          if (dataurl.substr(dataurl.length - 3, 3) === "svg") {
            temp.push(
              <SvgImage
                key={"image" + (i + index)}
                width={imgWidth}
                height={imgHeight}
                marginRight={calcS(spacing)}
                url={data[i + index].url}
                isImage={isSVGImage}
              />
            );
          } else {
            temp.push(
              <Image
                key={"image" + (i + index)}
                style={{
                  objectFit: "cover",
                  width: calcS(imgWidth),
                  height: calcS(imgHeight),
                  marginRight: calcS(spacing),
                }}
                src={data[i + index].url}
                alt="images"
              />
            );
          }
        }
      }
      container.push(temp);
    }
    return (
      <View>
        {container.map((row, rowindex) => (
          <View
            key={"imageRow" + rowindex}
            style={{ flexDirection: "row", marginBottom: calcS(mBottom) }}
            wrap={false}
          >
            {row.map((col) => {
              return col;
            })}
          </View>
        ))}
      </View>
    );
  }
}
