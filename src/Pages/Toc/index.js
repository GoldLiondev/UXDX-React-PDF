import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./Toc.style";
import data from "./Toc.data.json";
import Layout from "../../Component/Layout";
import { calcS } from "../../utils/calcSize";
const Toc = () => (
  <Layout title1={"UXDX "} title2={"PARTNERSHIP"}>
    <View
      style={{ width: calcS(10), height: calcS(10), marginTop: calcS(50) }}
    ></View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum1}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>WHY PARTNER WITH UXDX?</Text>
        <Text style={styles.SubParaData}>
          How we can help you achieve your objectives
        </Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum2}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>COMPANIES WHO PARTNER WITH US</Text>
        <Text style={styles.SubParaData}>You’re in great company!</Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum3}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>OUR AUDIENCE</Text>
        <Text style={styles.SubParaData}>
          THe breakdown of our audience across job title, seniority location and
          more
        </Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum4}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>OUR CONFERENCES</Text>
        <Text style={styles.SubParaData}>
          THe location of our conferences around the world
        </Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum5}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>OUR OPTIONS</Text>
        <Text style={styles.SubParaData}>
          THe different ways that you can get involved as a partner
        </Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum6}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>OUR APPROACH & PRICE LIST</Text>
        <Text style={styles.SubParaData1}>
          We take a custom approach to delivery to ensure that you get the best
          return for your investment
        </Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum7}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>CASE STUDIES</Text>
        <Text style={styles.SubParaData2}>
          Read about hwo we met the objectives of previous partners across
          product sales, services and recruitment
        </Text>
      </View>
    </View>
    <View style={styles.SubGroup}>
      <View style={styles.SubPage}>
        <Text style={styles.PageNum}>{data.SubHeadingNum8}</Text>
      </View>
      <View style={styles.SubContent}>
        <Text style={styles.SubHeading}>GET IN TOUCH</Text>
        <Text style={styles.SubParaData}>
          Meet the team - we’re waiting to hear from you!
        </Text>
      </View>
    </View>
  </Layout>
);
export default Toc;
