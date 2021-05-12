import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";

// Create styles
const styles = StyleSheet.create({
  ParaView: {
    height: calcS(260),
    width: calcS(1780),
    left: calcS(341),
  },
  HeadingParagraph: {
    top: calcS(18),
    fontWeight: 400,
    fontSize: calcS(40),
    color: "#727272",
    letterSpacing: calcS(1.5),
  },
});
export default styles;
