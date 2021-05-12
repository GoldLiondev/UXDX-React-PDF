import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./page7.style";
import Layout from "../../Component/Layout";
import CustomStudies from "../../Component/CustomStudies";
const Page7 = (props) => (
  <Layout title1="CASE " title2="STUDIES">
    <View style={styles.headersubtextview}>
      <Text style={styles.headersubtext}>
        Every partner has different needs and objectives. Here are some of the
        packages that we have done with our partners to help them to achieve
        their goals.
      </Text>
    </View>
    <View style={styles.CustomStudiesStyle}>
      <CustomStudies maindata={props.maindata}></CustomStudies>
    </View>
  </Layout>
);

export default Page7;
