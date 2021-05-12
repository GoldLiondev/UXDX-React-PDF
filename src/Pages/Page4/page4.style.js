import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";

// Create styles
const styles = StyleSheet.create({
  ParaView: {
    height: calcS(77),
    width: calcS(1780),
    left: calcS(327),
    marginTop: calcS(112),
  },
  TableView: {
    left: calcS(313),
    marginTop: calcS(40),
  },
  EnterpriesView: {
    height: calcS(61),
    width: calcS(1916),
    left: calcS(336),
    marginTop: calcS(110),
  },
  tableWidth: 1927,
  rowHeight: calcS(100),
  HeadingParagraph: {
    top: calcS(18),
    fontWeight: 400,
    fontSize: calcS(40),
    color: "#727272",
    letterSpacing: calcS(1.5),
    lineHeight: calcS(1.3),
  },
  EnterpriesParagraph: {
    fontFamily: "OpenSansBold",
    fontWeight: 700,
    fontSize: calcS(43),
    color: "#4E4E4E",
    lineHeight: calcS(1.3),
  },
  WorldMap: {
    width: calcS(1913),
    height: calcS(1109),
    left: calcS(327),
    top: calcS(24),
  },
  tableHeader: {
    fontSize: calcS(35),
    color: "#4E4E4E",
  },
  subTableHeader: {
    fontSize: calcS(25),
    color: "#4E4E4E",
  },
  verticalCenter: { margin: "auto" },
});
export default styles;
