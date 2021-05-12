import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import Layout from "../../Component/Layout";
import Quote from "../../Component/Quote";
import styles from "./page3.style";
import contentData from "./page3.data.json";
import databaseData from "../../utils/temp";
import ShowBar from "../../Component/ShowBar";
const quoteData = databaseData.testimonials.nodes[2];
const Page3 = () => (
  <Layout title1={contentData.headerText1} title2={contentData.headerText2}>
    <View style={styles.showBarStyle}>
      <ShowBar />
    </View>
    <View style={[styles.Row, styles.roles]}>
      <View style={[styles.Col, styles.AudienceView]}>
        <Text style={styles.Audience}>{contentData.audience}</Text>
        <Text style={styles.subAudience}>{contentData.subAudience}</Text>
      </View>
      <View style={[styles.Col, styles.seniorityView]}>
        <Text style={styles.seniorityPart1}>{contentData.seniority}</Text>
        <Text style={styles.seniorityPart2}>{contentData.seniorityText}</Text>
      </View>
    </View>

    <View style={[styles.Row, styles.ImageChart]}>
      <Image style={styles.Image13} src={contentData.image13}></Image>
      <Image style={styles.Image14} src={contentData.image14}></Image>
    </View>
    <View style={[styles.col, styles.companyView]}>
      <Text style={styles.companyHeader}>{contentData.companyHeader}</Text>
      <Text style={styles.companyContent}>{contentData.companyContent}</Text>
    </View>
    <View style={styles.imageLineChart}>
      <Image src={contentData.image15}></Image>
    </View>
    <View style={styles.LastContent}>
      <Quote data={quoteData} index={0} font={55} bgColor={"#08A7B1"}></Quote>
    </View>
  </Layout>
);
export default Page3;
