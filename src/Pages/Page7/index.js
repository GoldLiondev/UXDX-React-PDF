import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./page7.style";
import contentData from "./page7.data.json";
import Layout from "../../Component/Layout";
import CustomStudies from "../../Component/CustomStudies";
import data from "../../utils/temp";
const maindata = data.caseStudies.nodes;
const Page7 = () => (
  <Layout title1={contentData.Heading1} title2={contentData.Heading2}>
    <View style={styles.headersubtextview}>
      <Text style={styles.headersubtext}>{contentData.headersubtext}</Text>
    </View>
    <View style={styles.CustomStudiesStyle}>
      <CustomStudies maindata={maindata}></CustomStudies>
    </View>
  </Layout>
);

export default Page7;
