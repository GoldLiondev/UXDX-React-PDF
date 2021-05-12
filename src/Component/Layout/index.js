import React, { Component } from "react";
import FixedBar from "../FixedBar";
import PageBreak from "../PageBreak";
import { Page, View, Text } from "@react-pdf/renderer";
import { Totalwidth, Totalheight, calcS } from "../../utils/calcSize";
export default class index extends Component {
  render() {
    const { title1, title2 } = this.props;
    return (
      <Page
        size={[Totalwidth, Totalheight]}
        style={{
          flexDirection: "row",
        }}
        wrap
      >
        <FixedBar />
        <View style={{ flexDirection: "column" }}>
          <PageBreak title1={title1} title2={title2} />
          <View
            style={{
              flexDirection: "row",
              height: calcS(150),
              width: calcS(1900),
              left: calcS(341),
              top: calcS(10),
            }}
          >
            <Text
              style={{
                fontWeight: 400,
                fontSize: calcS(100),
                letterSpacing: calcS(2),
                color: "#404242",
              }}
            >
              {title1}
            </Text>
            <Text
              style={{
                fontWeight: 400,
                fontSize: calcS(100),
                letterSpacing: calcS(2),
                color: "#23BCAB",
              }}
            >
              {title2}
            </Text>
          </View>
          {this.props.children}
        </View>
      </Page>
    );
  }
}
