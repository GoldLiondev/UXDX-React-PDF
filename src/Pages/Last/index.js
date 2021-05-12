import React from "react";
import styles from "./last.style";
import contentData from "./last.data.json";
import { Text, View, Image } from "@react-pdf/renderer";
import Gallery from "../../Component/Gallery";
import data from "../../utils/temp";
import Layout from "../../Component/Layout";
const galleryData = data.salesPeople.nodes.map((item) => {
  return {
    url: item.data.Image[0].url,
    Name: item.data.Name,
    Job_Title: item.data.Job_Title,
    Email: item.data.Email,
  };
});
const Last = () => (
  <Layout title1={contentData.Heading1} title2={contentData.Heading2}>
    <View style={styles.ParaView}>
      <Text style={styles.HeadingParagraph}>{contentData.ParaViewData}</Text>
    </View>
    <View style={styles.galleryView}>
      <Gallery
        cols={2}
        data={galleryData}
        width={1100}
        imgHeight={550}
        spacing={50}
        cusFlag={true}
      />
    </View>
    <View style={styles.underView}>
      <Image style={styles.under} src={contentData.under}></Image>
    </View>
  </Layout>
);

export default Last;
