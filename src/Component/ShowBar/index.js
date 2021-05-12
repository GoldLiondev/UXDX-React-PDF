import React, { Component } from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import styles from "./showbar.style";
export default class showbar extends Component {
  render() {
    return (
      <View style={styles.stateBar}>
        <Image
          src="./assets/page3/background.png"
          style={styles.backStyle}
        ></Image>
        <View style={styles.showbarview}>
          <View style={styles.totaltext}>
            <Text style={styles.toptext}>5,000+</Text>
            <Text style={styles.undertext}>Attendees</Text>
          </View>
          <View style={styles.borderview}></View>
          <View style={styles.totaltext}>
            <Text style={styles.toptext}>100+</Text>
            <Text style={styles.undertext}>Countries</Text>
          </View>
          <View style={styles.borderview}></View>
          <View style={styles.totaltext}>
            <Text style={styles.toptext}>20k+</Text>
            <Text style={styles.undertext}>Global Community</Text>
          </View>
          <View style={styles.borderview}></View>
          <View style={styles.totaltext}>
            <Text style={styles.toptext}>42%</Text>
            <Text style={styles.undertext}>Decision Makers</Text>
          </View>
        </View>
      </View>
    );
  }
}
