import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./page6.style";
import contentData from "./page6.data.json";
import TableView from "../../Component/TableView";
import data from "../../utils/temp";
import Layout from "../../Component/Layout";
import config from "./table.config";
import SvgIcon from "../../Component/SvgIcon";
const tabledata = data.products.nodes;
const Page6 = () => (
  <Layout title1={contentData.Heading1} title2={contentData.Heading2}>
    <View style={styles.ParaView}>
      <Text style={styles.HeadingParagraph}>{contentData.ParaViewData}</Text>
    </View>
    <View style={styles.ApproachGroup}>
      <View style={styles.SubGroupTop}>
        <View style={styles.SubGroup}>
          <SvgIcon />

          <View style={styles.SubGroupContent}>
            <Text style={styles.SubGroupHeader}>{contentData.SubHeader1}</Text>
            <Text style={styles.SubGroupData}>{contentData.SubData1}</Text>
          </View>
        </View>

        <View style={[styles.SubGroup, styles.SubGroupRight]}>
          <SvgIcon />

          <View style={styles.SubGroupContent}>
            <Text style={styles.SubGroupHeader}>{contentData.SubHeader2}</Text>
            <Text style={styles.SubGroupData}>{contentData.SubData2}</Text>
          </View>
        </View>
      </View>
      <View style={styles.SubGroupBottom}>
        <View style={styles.SubGroup}>
          <SvgIcon />

          <View style={styles.SubGroupContent}>
            <Text style={styles.SubGroupHeader}>{contentData.SubHeader3}</Text>
            <Text style={styles.SubGroupData}>{contentData.SubData3}</Text>
          </View>
        </View>
        <View style={[styles.SubGroup, styles.SubGroupRight]}>
          <SvgIcon />

          <View style={styles.SubGroupContent}>
            <Text style={styles.SubGroupHeader}>{contentData.SubHeader4}</Text>
            <Text style={styles.SubGroupData}>{contentData.SubData4}</Text>
          </View>
        </View>
      </View>
    </View>
    <View style={[styles.TitleView, styles.PriceView]}>
      <Text style={[styles.Heading, { color: "#404242" }]}>
        {contentData.Heading3}
      </Text>
      <Text style={[styles.Heading, { color: "#23BCAB" }]}>
        {contentData.Heading4}
      </Text>
    </View>
    <View style={styles.TableView}>
      <TableView
        tabledata={tabledata}
        hearderData={config}
        width={styles.tableWidth}
      />
    </View>
  </Layout>
);
export default Page6;
