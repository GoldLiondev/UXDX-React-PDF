import React, { Component } from "react";
import { View, Image, Text } from "@react-pdf/renderer";
import styles from "./quote.style";
import styles2 from "./quote.style2";
import { calcS } from "../../utils/calcSize";
import isEmpty from "../../utils/isEmpty";

//company
//qutor
//person
//image
//index

export default class Quote extends Component {
  render() {
    let { dataWidth, bgColor } = this.props;
    dataWidth = isEmpty(dataWidth) ? calcS(1149) : calcS(dataWidth);
    bgColor = isEmpty(bgColor) ? "#0284C7" : bgColor;
    return (
      <View>
        {this.props.index ? (
          <View
            style={[
              styles.Footer,
              this.props.style,
              { backgroundColor: bgColor },
            ]}
          >
            <Image
              src={this.props.data.data.Image.raw[0].url}
              style={styles.Image5}
            ></Image>
            <View style={styles.FooterSide}>
              <Image
                src="./assets/common/Vector.png"
                style={styles.Vector1}
              ></Image>
              <Text
                style={[
                  styles.footerText1,
                  { fontSize: this.props.font, width: dataWidth },
                ]}
              >
                {this.props.data.data.Quote}
              </Text>
              <Text style={styles.LastMark1}>
                {this.props.data.data.Person}
              </Text>
              <Text style={styles.LastMark2}>
                {this.props.data.data.Job_Title}
                {" at "}
                {this.props.data.data.Company}
              </Text>
            </View>
          </View>
        ) : (
          <View
            style={[
              styles2.Footer,
              this.props.style,
              { backgroundColor: bgColor },
            ]}
          >
            <View style={styles2.FooterSide}>
              <Image
                src="./assets/common/Vector1.png"
                style={styles2.Vector1}
              ></Image>
              <Text
                style={[styles2.footerText1, { fontSize: this.props.font }]}
              >
                {this.props.data.data.Quote}
              </Text>
              <Text style={styles2.LastMark1}>
                {this.props.data.data.Person}
              </Text>
              <Text style={styles2.LastMark2}>
                {this.props.data.data.Job_Title}
                {" at "}
                {this.props.data.data.Company}
              </Text>
            </View>
            <Image
              src={this.props.data.data.Image.raw[0].url}
              style={styles2.Image5}
            ></Image>
          </View>
        )}
      </View>
    );
  }
}
