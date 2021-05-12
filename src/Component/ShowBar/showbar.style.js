import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";
const style = StyleSheet.create({
  showbarview: {
    flexDirection: "row",
    width: calcS(1889),
    height: calcS(283),
  },
  stateBar: {
    width: calcS(1889),
    height: calcS(283),
    backgroundColor: "#F1F5F9",
  },
  backStyle: {
    position: "absolute",
    opacity: 0.2,
    width: calcS(1889),
    height: calcS(283),
  },
  totaltext: {
    textAlign: "center",
    width: calcS(472),
    height: calcS(280),
    marginTop: calcS(283 / 4),
  },
  borderview: {
    borderLeft: "5px",
    textAlign: "center",
    width: calcS(5),
    height: calcS(200),
    marginTop: calcS(40),
  },
  toptext: {
    fontSize: calcS(80),
    fontFamily: "OpenSansBold",
    color: "#504AE0",
  },
  undertext: {
    fontSize: calcS(30),
    fontFamily: "SpenSansLight",
  },
});
export default style;
