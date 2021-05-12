import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./page5.style";
import Layout from "../../Component/Layout";
import CustomOption from "../../Component/CustomOption";
import { calcS } from "../../utils/calcSize";
const Page5 = (props) => (
  <Layout title1="OUR " title2="OPTIONS">
    <View style={styles.ParaView}>
      <Text style={styles.HeadingParagraph}>
        We have listed our common partnership options below however we like to
        customise each deal to your requirements so please get in touch to
        schedule a call.The UXDX audience consists of over 20,000 global UX,
        design, dev and product people all sharing a goal of improving their
        product development processes. Since we have specific events in EMEA,
        USA and APAC it makes easy to target your region as well. They're
        looking for solutions- show them how you can help!
      </Text>
    </View>
    <View
      style={{
        left: calcS(331),
        marginTop: calcS(20),
      }}
    >
      <CustomOption
        data={props.optionsData}
        G_cols={4}
        G_width={1892}
        G_imgHeight={325}
      />
    </View>
  </Layout>
);
export default Page5;
