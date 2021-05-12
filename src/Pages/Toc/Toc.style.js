import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";

// Create styles
const styles = StyleSheet.create({
  SubGroup: {
    flexDirection: "row",
    width: calcS(1279),
    left: calcS(332),
    marginBottom: calcS(100),
  },
  SubPage: {},
  PageNum: {
    width: calcS(74),
    height: calcS(150),
    fontSize: calcS(80),
    fontWeight: calcS(700),
    textAlign: "left",
    color: "#252427",
    fontFamily: "OpenSansBold",
  },
  SubContent: {
    left: calcS(60),
  },
  SubHeading: {
    width: calcS(1590),
    height: calcS(110),
    fontSize: calcS(70),
    textAlign: "left",
    color: "#252427",
    fontFamily: "OpenSansBold",
  },
  SubParaData: {
    width: calcS(1712),
    fontSize: calcS(50),
    fontWeight: "bold",
    textAlign: "left",
    color: "#777777",
    fontFamily: "OpenSansItalic",
  },
  SubParaData1: {
    width: calcS(1153),
    fontSize: calcS(50),
    fontWeight: "bold",
    textAlign: "left",
    color: "#777777",
    fontFamily: "OpenSansItalic",
  },
  SubParaData2: {
    width: calcS(1345),
    fontSize: calcS(50),
    fontWeight: "bold",
    textAlign: "left",
    color: "#777777",
    fontFamily: "OpenSansItalic",
  },
});
export default styles;
