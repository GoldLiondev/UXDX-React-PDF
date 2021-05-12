import React from "react";
import { startAndEndDate } from "../../utils/convertDateFormat";
import { Text, View } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";
import styles from "./page4.style";
const config = {
  field: [
    "Conference_Name",
    "Conference_Start_Date",
    "Expected_Audience_Size",
    "Conference_Venue_Type",
  ],
  widthRate: [0.2, 0.3, 0.3, 0.2],
  Conference_Name: {
    title: (width, height) => (
      <View style={{ width, height, paddingLeft: calcS(20) }}>
        <Text style={[{ width }, styles.tableHeader, styles.verticalCenter]}>
          LOCATION
        </Text>
      </View>
    ),
    value: (value) => {
      return value;
    },
    style: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: calcS(35),
      color: "black",
    },
  },
  Conference_Start_Date: {
    title: (width, height) => (
      <View style={[{ width, height, paddingLeft: calcS(20) }]}>
        <Text style={[{ width }, styles.tableHeader, styles.verticalCenter]}>
          DATES
        </Text>
      </View>
    ),
    style: { textAlign: "left", fontSize: calcS(35), color: "#4E4E4E" },
    value: (value, row) => {
      return startAndEndDate(value, row.Conference_End_Date);
    },
  },
  Expected_Audience_Size: {
    title: (width, height) => (
      <View style={[{ width, height, paddingLeft: calcS(20) }]}>
        <Text style={styles.tableHeader}>AUDIENCE SIZE</Text>
        <Text style={styles.subTableHeader}> In-Person / Online</Text>
      </View>
    ),
    value: (value) => {
      return value;
    },
    style: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: calcS(35),
      color: "#4E4E4E",
    },
  },
  Conference_Venue_Type: {
    title: (width, height) => (
      <View style={[{ width, height, paddingLeft: calcS(20) }]}>
        <Text style={[{ width }, styles.tableHeader, styles.verticalCenter]}>
          FORMAT
        </Text>
      </View>
    ),
    style: { fontSize: calcS(35), color: "#4E4E4E" },
    value: (value) => {
      return value.reduce((start, end) => {
        return start + " & " + end;
      });
    },
  },
};

export default config;
