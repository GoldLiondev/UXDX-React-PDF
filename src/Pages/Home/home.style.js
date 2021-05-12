import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";
const style = StyleSheet.create({
  page: {
    flexDirection: "column",
    width: calcS(2480),
    height: calcS(3508),
  },
  rectangle: {
    position: "absolute",
    width: calcS(2480),
    height: calcS(3508),
    left: calcS(0),
    top: calcS(0),
  },
  image: {
    position: "absolute",
    width: calcS(2480),
    height: calcS(1953),
  },
  ellipse: {
    position: "absolute",
    width: calcS(3712),
    height: calcS(1320),
    left: calcS(-886),
    top: calcS(837),
  },
  context: {
    width: "100%",
    top: calcS(2447),
    fontSize: calcS(100),
    textAlign: "center",
    fontFamily: "OpenSansRegular",
  },
  contextSecond: {
    width: "100%",
    top: calcS(2447),
    fontFamily: "OpenSansRegular",
    textAlign: "center",
    fontSize: calcS(140),
  },
  contextSecondBold: {
    fontFamily: "OpenSansBold",
    fontSize: calcS(140),
  },
  contextThird: {
    width: "100%",
    textAlign: "center",
    top: calcS(2447),
    fontFamily: "OpenSansRegular",
    fontSize: calcS(140),
  },
  contextThirdBold: {
    fontFamily: "OpenSansBold",
    fontSize: calcS(140),
  },
  product: {
    position: "absolute",
    width: calcS(1960),
    height: calcS(178),
    left: calcS(260),
    top: calcS(3330),
    color: "#4D4D4D",
    fontFamily: "OpenSansRegular",
    fontSize: calcS(80),
    textAlign: "center",
  },
  subtract: {
    position: "absolute",
    width: calcS(2480),
    height: calcS(646),
    left: calcS(0),
    top: calcS(2862),
  },
  uxui: {
    position: "absolute",
    width: calcS(782.93),
    height: calcS(782.93),
    top: calcS(1667.96),
    left: calcS((2480 - 782.93) / 2),
    color: "#4D4D4D",
  },
});
export default style;
