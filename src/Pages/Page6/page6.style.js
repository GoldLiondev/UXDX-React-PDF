import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";

// Create styles
const styles = StyleSheet.create({
  TitleView: {
    flexDirection: "row",
    height: calcS(150),
    width: calcS(1543),
    left: calcS(331),
  },
  ParaView: {
    height: calcS(200),
    width: calcS(1780),
    left: calcS(327),
  },
  TableView: {
    left: calcS(331),
    marginTop: calcS(40),
  },
  ApproachGroup: {
    left: calcS(331),
    width: calcS(1803),
    height: calcS(504),
  },
  SubGroupBottom: { marginTop: calcS(100), flexDirection: "row" },
  SubGroupTop: { flexDirection: "row" },
  PriceView: { marginTop: calcS(120) },
  SubGroupRight: { marginLeft: calcS(124) },
  Heading: {
    fontWeight: 400,
    fontSize: calcS(100),
    letterSpacing: calcS(4),
  },
  HeadingParagraph: {
    fontWeight: 400,
    fontSize: calcS(40),
    color: "#727272",
    letterSpacing: calcS(1),
    lineHeight: calcS(1.3),
  },
  RecruitmentPIC: {
    width: calcS(92),
    height: calcS(92),
  },
  SubGroup: { flexDirection: "row", height: calcS(202), width: calcS(839) },
  SubGroupContent: {
    flexDirection: "column",
    left: calcS(56),
  },
  SubGroupHeader: {
    fontFamily: "OpenSansBold",
    textTransform: "uppercase",
    width: calcS(691),
    height: calcS(61),
    fontSize: calcS(45),
    color: "#4E4E4E",
    lineHeight: calcS(1.3),
  },
  SubGroupData: {
    marginTop: calcS(18),
    width: calcS(631),
    height: calcS(123),
    fontSize: calcS(30),
    color: "#727272",
    lineHeight: calcS(1.3),
  },
  tablewidth: 1800,
  tableHeader: {
    fontSize: calcS(40),
    fontFamily: "SpenSansSemiBold",
  },
  verticalCenter: { top: "50%", transform: "translate(0%, -25%)" },
});
export default styles;
