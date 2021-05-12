import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import styles from "./home.style";
import data from "./home.data.json";

const Home = () => (
  <Page size={styles.page}>
    <View>
      <Image style={styles.rectangle} src={data.rectangle} alt="images" />
      <Image style={styles.ellipse} src={data.ellipse} alt="images" />
      <Image style={styles.image} src={data.image} alt="images" />
      <Image style={styles.subtract} src={data.subtract} alt="images" />
      <Text style={styles.context}>{data.context}</Text>
      <Text style={styles.contextSecond}>
        {data.contextSecond}
        <Text style={styles.contextSecondBold}>{data.contextSecondBold}</Text>
      </Text>
      <Text style={styles.contextThird}>
        {data.contextThird}
        <Text style={styles.contextThirdBold}>{data.contextThirdBold}</Text>
      </Text>
      <Text style={styles.product}>{data.product}</Text>
      <Image style={styles.uxui} src={data.uxui} alt="images" />
    </View>
  </Page>
);

export default Home;
