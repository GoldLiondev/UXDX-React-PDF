import React from "react";
import { Text, View } from "@react-pdf/renderer";
import styles from "./page6.style";
import TableView from "../../Component/TableView";
import Layout from "../../Component/Layout";
import config from "./table.config";
import SvgIcon from "../../Component/SvgIcon";
const Page6 = (props) => (
  <Layout title1="OUR " title2="APPROACH">
    <View style={styles.ParaView}>
      <Text style={styles.HeadingParagraph}>
        We have some products listed over the coming pages but we don’t want you
        to be limited to what we have on offer. Get in touch to let us customise
        a package that is tailored to your needs.
      </Text>
    </View>
    <View style={styles.ApproachGroup}>
      <View style={styles.SubGroupTop}>
        <View style={styles.SubGroup}>
          <SvgIcon />

          <View style={styles.SubGroupContent}>
            <Text style={styles.SubGroupHeader}>Tailored package</Text>
            <Text style={styles.SubGroupData}>
              We customise our approach based on your goals and audience
              segments with a constant focus on delivering a strong ROI.
            </Text>
          </View>
        </View>

        <View style={[styles.SubGroup, styles.SubGroupRight]}>
          <SvgIcon />

          <View style={styles.SubGroupContent}>
            <Text style={styles.SubGroupHeader}>On the day</Text>
            <Text style={styles.SubGroupData}>
              You will have a dedicated contact to work through any issues that
              may arise on the day.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.SubGroupBottom}>
        <View style={styles.SubGroup}>
          <SvgIcon />

          <View style={styles.SubGroupContent}>
            <Text style={styles.SubGroupHeader}>Two teams - one goal</Text>
            <Text style={styles.SubGroupData}>
              We create and agree on a shared deliverable plan to execute the
              agreed package to its full potential.
            </Text>
          </View>
        </View>
        <View style={[styles.SubGroup, styles.SubGroupRight]}>
          <SvgIcon />

          <View style={styles.SubGroupContent}>
            <Text style={styles.SubGroupHeader}>Post event report</Text>
            <Text style={styles.SubGroupData}>
              We'll share with you a post event report to highlight the audience
              exposure both at the event and on social channels.
            </Text>
          </View>
        </View>
      </View>
    </View>
    <View style={[styles.TitleView, styles.PriceView]}>
      <Text style={[styles.Heading, { color: "#404242" }]}>{"PRICE "}</Text>
      <Text style={[styles.Heading, { color: "#23BCAB" }]}>LIST</Text>
    </View>
    <View style={styles.TableView}>
      <TableView
        tabledata={props.tabledata}
        hearderData={config}
        width={styles.tableWidth}
      />
    </View>
  </Layout>
);
export default Page6;
