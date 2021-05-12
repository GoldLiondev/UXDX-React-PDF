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
    width: calcS(1789),
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
    height: calcS(130),
    fontWeight: 700,
    fontSize: calcS(75),
    letterSpacing: calcS(1.3),
    marginTop: calcS(50),
  },
  DiscriptionTitle: {
    fontFamily: "OpenSansBold",
    width: calcS(800),
    height: calcS(100),
    fontSize: calcS(45),
    letterSpacing: calcS(1.3),
  },

  DiscriptionData: {
    marginTop: calcS(10),
    width: calcS(690),
    fontWeight: 600,
    fontSize: calcS(30),
    letterSpacing: calcS(1.3),
    color: "#606060",
  },

  GalleryView: {
    marginTop: calcS(20),
  },
  markdownP: { textOverflow: "" },
  markdownOl: {
    width: calcS(1000),
    marginTop: calcS(3),
    marginBottom: calcS(3),
  },
  markdownUl: { width: calcS(1000) },
  markdownLi: {
    marginLeft: calcS(20),
    listStyletype: "circle",
  },
  markdownH1: { fontSize: calcS(50) },
  markdownH2: { fontSize: calcS(45) },
  markdownH3: { fontSize: calcS(40) },
  markdownBlockquote: {
    padding: calcS(2),
  },
  markdownEm: { fontFamily: "OpenSansItalic" },
  markdownStrong: { fontFamily: "SpenSansSemiBold" },
  markdownDel: { textDecoration: "line-through" },
  markdownBr: {},
});
export default styles;
