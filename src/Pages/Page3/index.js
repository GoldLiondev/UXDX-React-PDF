import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import Layout from "../../Component/Layout";
import Quote from "../../Component/Quote";
import styles from "./page3.style";
import ShowBar from "../../Component/ShowBar";
const Page3 = (props) => (
  <Layout title1="OUR " title2="AUDIENCE">
    <View style={styles.showBarStyle}>
      <ShowBar />
    </View>
    <View style={[styles.Row, styles.roles]}>
      <View style={[styles.Col, styles.AudienceView]}>
        <Text style={styles.Audience}>AUDIENCE ROLES</Text>
        <Text style={styles.subAudience}>
          It takes a full product team to build a successful product so we
          target Product, UX, Design and Development roles.
        </Text>
      </View>
      <View style={[styles.Col, styles.seniorityView]}>
        <Text style={styles.seniorityPart1}>Audience SENiority</Text>
        <Text style={styles.seniorityPart2}>
          We have a large contingent of senior decision makers as well as the
          people doing the work, who have a strong say in the products and
          services they use.
        </Text>
      </View>
    </View>

    <View style={[styles.Row, styles.ImageChart]}>
      <Image style={styles.Image13} src="./assets/page3/image13.png"></Image>
      <Image style={styles.Image14} src="./assets/page3/image14.png"></Image>
    </View>
    <View style={[styles.col, styles.companyView]}>
      <Text style={styles.companyHeader}>Company Size</Text>
      <Text style={styles.companyContent}>
        As companies scale they begin to slow down because they start creating
        silos and adopting waterfall ways of working. We demonstrate how
        companies can scale without losing the competitive product team
        structures.
      </Text>
    </View>
    <View style={styles.imageLineChart}>
      <Image src="./assets/page3/image15.png"></Image>
    </View>
    <View style={styles.LastContent}>
      <Quote
        data={props.quoteData}
        index={0}
        font={55}
        bgColor={"#08A7B1"}
      ></Quote>
    </View>
  </Layout>
);
export default Page3;
