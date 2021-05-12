import { Text, View } from "@react-pdf/renderer";
import styles from "./page6.style";

const config = {
  field: ["Category", "Name", "Price"],
  widthRate: [0.3, 0.4, 0.3],
  filter: "Category",
  Category: {
    title: (width, height) => (
      <View style={{ width, height, paddingLeft: "20px" }}>
        <Text style={[{ width }, styles.tableHeader, styles.verticalCenter]}>
          Category
        </Text>
      </View>
    ),
    value: (value) => {
      return value;
    },
    style: {
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "35px",
      color: "black",
    },
  },
  Name: {
    title: (width, height) => (
      <View style={{ width, height, paddingLeft: "20px" }}>
        <Text style={[{ width }, styles.tableHeader, styles.verticalCenter]}>
          Option
        </Text>
      </View>
    ),
    style: { textAlign: "left", fontSize: "35px", color: "black" },
    value: (value) => {
      return value;
    },
  },
  Price: {
    title: (width, height) => (
      <View style={{ width, height, paddingLeft: "20px" }}>
        <Text style={[{ width }, styles.tableHeader, styles.verticalCenter]}>
          Price
        </Text>
      </View>
    ),
    value: (value) => {
      return value;
    },
    style: {
      textAlign: "right",
      fontSize: "35px",
      color: "black",
    },
  },
};

export default config;
