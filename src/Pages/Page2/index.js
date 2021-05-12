import React from "react";
import { View } from "@react-pdf/renderer";
import Layout from "../../Component/Layout";
import Gallery from "../../Component/Gallery";
import Quote from "../../Component/Quote";

import styles from "./page2.style";
import contentData from "./page2.data.json";
import data from "../../utils/temp";
import { calcS } from "../../utils/calcSize";
const quoteData = data.testimonials.nodes[0];
const galleryData = data.partners.nodes.map((e) => {
  return { url: e.data.Company_Logo[0].url };
});

const Page1 = () => (
  <Layout title1={contentData.Heading1} title2={contentData.Heading2}>
    <View
      style={{
        marginTop: calcS(40),
        left: calcS(320),
        padding: calcS(30),
        width: calcS(1990),
      }}
    >
      <Gallery
        cols={4}
        data={galleryData}
        width={1990}
        imgHeight={160}
        spacing={100}
        logo={true}
        isSVGImage={true}
        mBottom={55}
      />
    </View>
    <View style={styles.LastContent}>
      <Quote index={1} font={35} data={quoteData} dataWidth={1111}></Quote>
    </View>
  </Layout>
);
export default Page1;
