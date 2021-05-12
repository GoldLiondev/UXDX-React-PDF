import React from "react";
import { View } from "@react-pdf/renderer";
import Layout from "../../Component/Layout";
import Gallery from "../../Component/Gallery";
import Quote from "../../Component/Quote";

import styles from "./page2.style";
import { calcS } from "../../utils/calcSize";

const Page1 = (props) => (
  <Layout title1="COMPANIES WHO PARTNER " title2="WITH US">
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
        data={props.galleryData}
        width={1990}
        imgHeight={160}
        spacing={100}
        logo={true}
        isSVGImage={true}
        mBottom={55}
      />
    </View>
    <View style={styles.LastContent}>
      <Quote index={1} font={35} data={props.quoteData} dataWidth={1111}></Quote>
    </View>
  </Layout>
);
export default Page1;
