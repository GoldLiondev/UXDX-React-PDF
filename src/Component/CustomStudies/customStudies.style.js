import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";
const style = StyleSheet.create({
  showtext: {
    flexDirection: "row",
  },
  adobexdview: {
    marginTop: calcS(80),
  },
  adobexd: {
    fontFamily: "OpenSansBold",
    fontSize: calcS(60),
    textAlign: "left",
    width: calcS(900),
  },
  adobexdtextview: {
    marginTop: calcS(8),
  },
  adobexdtext: {
    color: "#606060",
    marginTop: calcS(15),
    fontSize: calcS(30),
    textAlign: "left",
    width: calcS(910),
  },
  whyuxdxview: {
    marginTop: calcS(63),
  },
  whyuxdx: {
    fontFamily: "OpenSansBold",
    fontSize: calcS(45),
    textAlign: "left",
    width: calcS(308),
  },
  whyuxdxtextview: {
    marginTop: calcS(15),
  },
  svglogoview: {
    marginLeft: calcS(300),
  },
  svglogo: {
    marginLeft: calcS(435),
  },
  whyuxdxtext: {
    marginTop: calcS(15),
    color: "#606060",
    fontSize: calcS(30),
    textAlign: "left",
    width: calcS(876),
  },
  totalview: {
    marginTop: calcS(67),
    flexDirection: "row",
  },
  approachview: {},
  approach: {
    fontFamily: "OpenSansBold",
    fontSize: calcS(45),
    textAlign: "left",
    width: calcS(308),
  },
  approachtext: {
    marginTop: calcS(15),
    color: "#606060",
    fontSize: calcS(30),
    textAlign: "left",
    width: calcS(876),
  },
  outcomeview: {
    marginLeft: calcS(171),
  },
  outcome: {
    fontFamily: "OpenSansBold",
    fontSize: calcS(45),
    textAlign: "left",
    width: calcS(308),
  },
  outcometext: {
    marginTop: calcS(15),
    color: "#606060",
    fontSize: calcS(30),
    textAlign: "left",
    width: calcS(876),
  },
  imageview: {
    marginTop: calcS(141),
    flexDirection: "row",
  },
  subimage: {
    width: calcS(852),
    height: calcS(569),
  },
});
export default style;
