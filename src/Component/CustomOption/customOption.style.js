import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";

// Create styles
const styles = StyleSheet.create({
  OptionView: {
    flexDirection: "column",
  },
  HrView: {
    marginTop: calcS(126),
  },
  ContentView: {
    flexDirection: "row",
    marginTop: calcS(111),
    width: "1789",
  },
  EvenContentPicView: {
    width: calcS(670),
    height: calcS(483),
    marginLeft: calcS(200),
  },
  OddContentPicView: {
    marginRight: calcS(200),
    width: calcS(670),
    height: calcS(483),
  },
  EvenDiscriptionView: { width: calcS(958), marginBottom: calcS(20) },
  OddDiscriptionView: { width: calcS(958), marginBottom: calcS(20) },
  CategoryTitle: {
    fontFamily: "OpenSansBold",
    height: calcS(100),
    fontWeight: 700,
    fontSize: calcS(75),
    letterSpacing: calcS(1.3),
    lineHeight: calcS(1.2),
    marginTop: calcS(70),
  },
  DiscriptionTitle: {
    fontFamily: "OpenSansBold",
    width: calcS(800),
    height: calcS(61),
    fontSize: calcS(45),
    letterSpacing: calcS(1.3),
    lineHeight: calcS(1.2),
  },

  DiscriptionData: {
    marginTop: calcS(24),
    width: calcS(690),
    fontWeight: 600,
    fontSize: calcS(30),
    letterSpacing: calcS(1.3),
    lineHeight: calcS(1.2),
    color: "#606060",
  },

  GalleryView: {
    marginTop: calcS(20),
  },
  markdownP: { wordBreak: false },
  markdownOl: {
    width: "1000px",
    marginTop: "3px",
    marginBottom: "3px",
  },
  markdownUl: { width: "1000px" },
  markdownLi: {
    marginLeft: "20px",
    listStyletype: "circle",
  },
  markdownH1: { fontSize: "50px" },
  markdownH2: { fontSize: "45px" },
  markdownH3: { fontSize: "40px" },
  markdownBlockquote: {
    padding: "2px",
  },
  markdownEm: { fontFamily: "OpenSansItalic" },
  markdownStrong: { fontFamily: "SpenSansSemiBold" },
  markdownDel: { textDecoration: "line-through" },
  markdownBr: {},
});
export default styles;
