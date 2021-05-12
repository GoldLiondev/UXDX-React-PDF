import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import styles from "./page1.style";
import contentData from "./page1.data.json";
import Layout from "../../Component/Layout";
import data from "../../utils/temp";
import Quote from "../../Component/Quote";
const quoteData = data.testimonials.nodes[1];
const Page1 = () => (
  <Layout title1={contentData.Heading1} title2={contentData.Heading2}>
    <View style={styles.ParaView}>
      <Text style={styles.HeadingParagraph}>{contentData.ParaViewData}</Text>
    </View>
    <View style={[styles.SubGroup, styles.SubGroup1]}>
      <View style={styles.HeadingParagraph1}>
        <Text style={styles.SubHeading}>{contentData.SubHeading1}</Text>
        <Text style={styles.HeadingParagraph}>{contentData.SubParaData1}</Text>
      </View>
      <Image
        style={styles.AwarenessPIC}
        src={contentData.AwarenessPIC}
        alt="images"
      />
    </View>
    <View style={[styles.SubGroup, styles.SubGroup2]}>
      <Image
        style={styles.AuthorityPIC}
        src={contentData.AuthorityPIC}
        alt="images"
      />
      <View style={styles.HeadingParagraph2}>
        <Text style={styles.SubHeading}>{contentData.SubHeading2}</Text>
        <Text style={styles.HeadingParagraph}>{contentData.SubParaData2}</Text>
      </View>
    </View>
    <View style={[styles.SubGroup, styles.SubGroup3]}>
      <View style={styles.HeadingParagraph3}>
        <Text style={styles.SubHeading}>{contentData.SubHeading3}</Text>
        <Text style={styles.HeadingParagraph}>{contentData.SubParaData3}</Text>
      </View>
      <Image
        style={styles.EducationPIC}
        src={contentData.EducationPIC}
        alt="images"
      />
    </View>
    <View style={[styles.SubGroup, styles.SubGroup4]}>
      <Image
        style={styles.RecruitmentPIC}
        src={contentData.RecruitmentPIC}
        alt="images"
      />
      <View style={styles.HeadingParagraph4}>
        <Text style={styles.SubHeading}>{contentData.SubHeading4}</Text>
        <Text style={styles.HeadingParagraph}>{contentData.SubParaData4}</Text>
      </View>
    </View>
    <View style={styles.LastContent}>
      <Quote
        index={1}
        font={45}
        data={quoteData}
        dataWidth={1000}
        style={styles.Quotestyle}
      ></Quote>
    </View>
  </Layout>
);
export default Page1;
