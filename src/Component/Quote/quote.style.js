import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";

// Create styles
const styles = StyleSheet.create({
  Footer: {
    flexDirection: "row",
    width: calcS(1878),
    height: calcS(704),
    backgroundColor: "#0284C7",
    borderRadius: calcS(30),
  },
  FooterSide: {
    flexDirection: "column",
    marginLeft: calcS(84.81),
  },
  Image5: {
    width: calcS(500),
    height: calcS(503),
    marginTop: calcS(100),
    marginLeft: calcS(121),
    marginBottom: calcS(101),
  },
  Vector1: {
    width: calcS(81.81),
    height: calcS(65.88),
    marginTop: calcS(111.25),
    left: calcS(0),
  },
  footerText1: {
    width: calcS(1111),
    height: calcS(333),
    marginTop: calcS(40.87),
    fontWeight: 600,
    letterSpacing: calcS(2),
    lineHeight: calcS(1.2),
    color: "white",
  },
  LastMark1: {
    width: calcS(230),
    height: calcS(34),
    marginTop: calcS(498),
    fontWeight: 600,
    fontSize: calcS(25),
    letterSpacing: calcS(1),
    color: "white",
    position: "absolute",
  },
  LastMark2: {
    width: calcS(262),
    height: calcS(27),
    marginTop: calcS(532),
    fontWeight: 600,
    fontSize: calcS(20),
    letterSpacing: calcS(0.01),
    color: "white",
    position: "absolute",
  },
});
export default styles;
