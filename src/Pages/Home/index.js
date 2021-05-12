import React from "react";
import { Page, Text, View, Image } from "@react-pdf/renderer";
import styles from "./home.style";

const Home = () => (
  <Page size={styles.page}>
    <View>
      <Image
        style={styles.rectangle}
        src="./assets/home/Rectangle.png"
        alt="images"
      />
      <Image
        style={styles.ellipse}
        src="./assets/home/Ellipse2.png"
        alt="images"
      />
      <Image style={styles.image} src="./assets/home/back.png" alt="images" />
      <Image
        style={styles.subtract}
        src={"./assets/home/subtract.png"}
        alt="images"
      />
      <Text style={styles.context}>{"THE CONFERENCE TO SHIFT"}</Text>
      <Text style={styles.contextSecond}>
        {"FROM "}
        <Text style={styles.contextSecondBold}>{"PROJECTS"}</Text>
      </Text>
      <Text style={styles.contextThird}>
        {"TO "}
        <Text style={styles.contextThirdBold}>{"PRODUCT TEAMS"}</Text>
      </Text>
      <Text style={styles.product}>{"PRODUCT | UX | DESIGN | DEV"}</Text>
      <Image style={styles.uxui} src={"./assets/home/uxui.png"} alt="images" />
    </View>
  </Page>
);

export default Home;
