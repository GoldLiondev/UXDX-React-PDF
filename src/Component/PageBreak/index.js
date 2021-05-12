import React, { Component } from "react";
import { View, Svg, Line, Text, Image } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";
import isEmpty from "../../utils/isEmpty";
import styles from "./pageBreak.style";

export default class index extends Component {
  render() {
    const { title1, title2 } = this.props;
    let mytitle1 = isEmpty(title1) ? "" : title1;
    let mytitle2 = isEmpty(title2) ? "" : title2;
    return (
      <View fixed>
        <View style={styles.TopView}>
          <View style={styles.PICView}>
            <Image
              style={styles.LogoPIC}
              src="./assets/common/UXDX_logo 4.png"
              alt="images"
            />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.Heading2}>{mytitle2}</Text>
            <Text style={styles.Heading1}>{mytitle1}</Text>
          </View>
        </View>
        <Svg
          height={calcS(3)}
          width={calcS(2219)}
          style={{ marginBottom: calcS(66) }}
        >
          <Line
            x1={calcS(327)}
            y1={calcS(0)}
            x2={calcS(2219)}
            y2={calcS(0)}
            strokeWidth={1}
            stroke="rgb(0,0,0)"
          />
        </Svg>
      </View>
    );
  }
}
