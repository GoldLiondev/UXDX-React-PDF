import React from "react";
import styles from "./last.style";
import { Text, View, Image } from "@react-pdf/renderer";
import Gallery from "../../Component/Gallery";
import Layout from "../../Component/Layout";

const Last = (props) => (
  <Layout title1="GET IN " title2="STUDIES">
    <View style={styles.ParaView}>
      <Text style={styles.HeadingParagraph}>
        Are you interested to learn more? Get in touch to see how we can help
        you exceed your goals and objectives.
      </Text>
    </View>
    <View style={styles.galleryView}>
      <Gallery
        cols={2}
        data={props.galleryData}
        width={1100}
        imgHeight={550}
        spacing={50}
        cusFlag={true}
      />
    </View>
    <View style={styles.underView}>
      <Image style={styles.under} src="./assets/last/image2.png"></Image>
    </View>
  </Layout>
);

export default Last;
