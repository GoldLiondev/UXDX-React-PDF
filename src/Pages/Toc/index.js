import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./Toc.style";
import data from "./Toc.data.json";
import Layout from "../../Component/Layout";
const Toc = () => (
  <Layout title1={data.Heading1} title2={data.Heading2}>
    <View style={{ width: "10px", height: "10px", marginTop: "50px" }}></View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum1}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>{data.SubHeading1}</Text>
        <Text style={styles.SubParaData}>{data.SubParaData1}</Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum2}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>{data.SubHeading2}</Text>
        <Text style={styles.SubParaData}>{data.SubParaData2}</Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum3}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>{data.SubHeading3}</Text>
        <Text style={styles.SubParaData}>{data.SubParaData3}</Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum4}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>{data.SubHeading4}</Text>
        <Text style={styles.SubParaData}>{data.SubParaData4}</Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum5}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>{data.SubHeading5}</Text>
        <Text style={styles.SubParaData}>{data.SubParaData5}</Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum6}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>{data.SubHeading6}</Text>
        <Text style={styles.SubParaData1}>{data.SubParaData6}</Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum7}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>{data.SubHeading7}</Text>
        <Text style={styles.SubParaData2}>{data.SubParaData7}</Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum8}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>{data.SubHeading8}</Text>
        <Text style={styles.SubParaData}>{data.SubParaData8}</Text>
      </View>
    </View>
  </Layout>
);
export default Toc;
