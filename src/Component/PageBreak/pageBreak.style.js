import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";

// Create styles
const styles = StyleSheet.create({
  TopView: {
    flexDirection: "row",
  },
  PICView: {
    marginTop: calcS(131),
    left: calcS(317),
    width: calcS(152),
    height: calcS(160),
    padding: "auto",
  },
  titleView: {
    position: "absolute",
    right: calcS(0),
    width: calcS(1500),
    flexDirection: "row-reverse",
    height: calcS(82),
    marginTop: calcS(214),
  },
  LogoPIC: {
    width: calcS(140),
    height: calcS(152),
  },
  Heading1: {
    color: "#404242",
    fontWeight: 400,
    fontSize: calcS(60),
    letterSpacing: calcS(4),
  },
  Heading2: {
    color: "#23BCAB",
    fontWeight: 400,
    fontSize: calcS(60),
    letterSpacing: calcS(4),
  },
});
export default styles;
