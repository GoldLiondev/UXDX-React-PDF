import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import styles from "./page4.style";
import TableView from "../../Component/TableView";
import Layout from "../../Component/Layout";
import config from "./table.config";
import Gallery from "../../Component/Gallery";
import { calcS } from "../../utils/calcSize";

const Page4 = (props) => (
  <Layout title1="OUR " title2="CONFERENCES">
    <View style={styles.TableView}>
      <TableView
        tabledata={props.tabledata}
        hearderData={config}
        width={styles.tableWidth}
        styletype={true}
      />
    </View>
    <View style={styles.ParaView}>
      <Text style={styles.HeadingParagraph}>
        In addition to our main conferences, we run free community events around
        the world.
      </Text>
    </View>
    <Image
      style={styles.WorldMap}
      src="./assets/page4/image1.png"
      alt="images"
    />
    <View style={styles.EnterpriesView}>
      <Text style={styles.EnterpriesParagraph}>
        TRUSTED BY OVER 5,000 STARTUPS, SCALEUPS AND ENTERPRISES AROUND THE
        WORLD
      </Text>
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
        data={props.galleryData}
        width={1908}
        imgHeight={162}
        spacing={3}
        logo={true}
      />
    </View>
  </Layout>
);
export default Page4;
