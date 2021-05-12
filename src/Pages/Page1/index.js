import React from "react";
import { Text, View, Image } from "@react-pdf/renderer";
import styles from "./page1.style";
import Layout from "../../Component/Layout";
import Quote from "../../Component/Quote";
const Page1 = (props) => (
  <Layout title1="WHY PARTNER " title2="WITH UXDX?">
    <View style={styles.ParaView}>
      <Text style={styles.HeadingParagraph}>
        The UXDX audience consists of over 20,000 global UX, design, dev and
        product people all sharing a goal of improving their product development
        processes. Since we have specific events in EMEA, USA and APAC it makes
        easy to target your region as well. They're looking for solutions- show
        them how you can help!
      </Text>
    </View>
    <View style={[styles.SubGroup, styles.SubGroup1]}>
      <View style={styles.HeadingParagraph1}>
        <Text style={styles.SubHeading}>AWARENESS</Text>
        <Text style={styles.HeadingParagraph}>
          Our audience knows that they have problems in product delivery. The
          UXDX brand will give you a platform to reach them and highlight your
          service.
        </Text>
      </View>
      <Image
        style={styles.AwarenessPIC}
        src="./assets/page1/image1.png"
        alt="images"
      />
    </View>
    <View style={[styles.SubGroup, styles.SubGroup2]}>
      <Image
        style={styles.AuthorityPIC}
        src="./assets/page1/image2.png"
        alt="images"
      />
      <View style={styles.HeadingParagraph2}>
        <Text style={styles.SubHeading}>AUTHORITY</Text>
        <Text style={styles.HeadingParagraph}>
          People need to know that they can trust you to solve their problems.
          There is little faith in a company just saying they're great. UXDX
          allows your brand to get in front of your audience and demonstrate
          that you are reliable and perfect for their needs.
        </Text>
      </View>
    </View>
    <View style={[styles.SubGroup, styles.SubGroup3]}>
      <View style={styles.HeadingParagraph3}>
        <Text style={styles.SubHeading}>EDUCATION</Text>
        <Text style={styles.HeadingParagraph}>
          UXDX provides a platform for you to deliver dedicated training on your
          product or service. By highlighting the benefits as well as reducing
          the riction for change, it will increase your engagement with your
          audience.
        </Text>
      </View>
      <Image
        style={styles.EducationPIC}
        src="./assets/page1/image3.png"
        alt="images"
      />
    </View>
    <View style={[styles.SubGroup, styles.SubGroup4]}>
      <Image
        style={styles.RecruitmentPIC}
        src="./assets/page1/image4.png"
        alt="images"
      />
      <View style={styles.HeadingParagraph4}>
        <Text style={styles.SubHeading}>RECRUITMENT</Text>
        <Text style={styles.HeadingParagraph}>
          Finding the best talent can be challenging. At UXDX, we help you get
          your brand in front of our audience of professionals to help entice
          them to your company. We are dedicated to helping you get the exact
          roles you need.
        </Text>
      </View>
    </View>
    <View style={styles.LastContent}>
      <Quote
        index={1}
        font={45}
        data={props.quoteData}
        dataWidth={1000}
        style={styles.Quotestyle}
      ></Quote>
    </View>
  </Layout>
);
export default Page1;
