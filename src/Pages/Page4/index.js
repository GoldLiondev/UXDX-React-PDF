import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import styles from "./page4.style";
import contentData from "./page4.data.json";
import TableView from "../../Component/TableView";
import data from "../../utils/temp";
import Layout from "../../Component/Layout";
import config from "./table.config";
import Gallery from "../../Component/Gallery";
import { calcS } from "../../utils/calcSize";
const tabledata = data.conferences.nodes;
const galleryData = data.companies.nodes.map((item) => {
  return { url: item.data.Company_Logo[0].url };
});
const Page4 = () => (
  <Layout title1={contentData.Heading1} title2={contentData.Heading2}>
    <View style={styles.TableView}>
      <TableView
        tabledata={tabledata}
        hearderData={config}
        width={styles.tableWidth}
        styletype={true}
      />
    </View>
    <View style={styles.ParaView}>
      <Text style={styles.HeadingParagraph}>{contentData.ParaViewData}</Text>
    </View>
    <Image style={styles.WorldMap} src={contentData.WorldMap} alt="images" />
    <View style={styles.EnterpriesView}>
      <Text style={styles.EnterpriesParagraph}>{contentData.Enterpries}</Text>
    </View>
    <View
      style={{
        marginTop: calcS(15),
        left: calcS(332),
        padding: calcS(25),
        width: calcS(1908),
        backgroundColor: "#ECF2F9",
      }}
    >
      <Gallery
        cols={7}
        data={galleryData}
        width={1908}
        imgHeight={162}
        spacing={3}
        logo={true}
      />
    </View>
  </Layout>
);
export default Page4;
