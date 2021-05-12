import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";
const style = StyleSheet.create({
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
  galleryView: {
    left: calcS(331),
  },
  underView: { top: calcS(1684 + 39), position: "absolute" },
  under: {
    width: calcS(2675),
    height: calcS(1785),
  },
});
export default style;
