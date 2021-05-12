import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";
const style = StyleSheet.create({
  CustomStudiesStyle: {
    left: calcS(327),
  },
  headersubtextview: {
    marginTop: calcS(87),
  },
  headersubtext: {
    fontSize: calcS(40),
    textAlign: "left",
    color: "#727272",
    width: calcS(1780),
    left: calcS(327),
  },
});
export default style;
