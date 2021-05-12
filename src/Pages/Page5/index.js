import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./page5.style";
import contentData from "./page5.data.json";
import Layout from "../../Component/Layout";
import CustomOption from "../../Component/CustomOption";
import { calcS } from "../../utils/calcSize";
import data from "../../utils/temp";
const optionsData = data.products.nodes;
const Page5 = () => (
  <Layout title1={contentData.Heading1} title2={contentData.Heading2}>
    <View style={styles.ParaView}>
      <Text style={styles.HeadingParagraph}>{contentData.ParaViewData}</Text>
    </View>
    <View
      style={{
        left: calcS(331),
        marginTop: calcS(20),
      }}
    >
      <CustomOption
        data={optionsData}
        G_cols={4}
        G_width={1892}
        G_imgHeight={325}
      />
    </View>
  </Layout>
);
export default Page5;
