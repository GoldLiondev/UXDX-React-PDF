import React, { Component } from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./fixedBar.style";
export default class index extends Component {
  render() {
    return (
      <View style={{ height: "100%" }} fixed>
        <Text style={styles.Footer}>UXDX | Partnership opportunities</Text>
        <Text
          style={styles.FooterNum}
          render={({ pageNumber }) => `${pageNumber}`}
        />
      </View>
    );
  }
}
