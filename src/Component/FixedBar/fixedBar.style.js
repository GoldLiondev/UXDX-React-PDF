import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";

// Create styles
const styles = StyleSheet.create({
  Footer: {
    position: "absolute",
    width: calcS(1153),
    height: calcS(58),
    left: calcS(-490),
    bottom: calcS(595),
    paddingTop: calcS(5),
    fontSize: calcS(48),
    lineHeight: calcS(1.2),
    textAlign: "center",
    textTransform: "uppercase",
    color: "#000000",
    transform: "rotate(-90deg)",
  },
  FooterNum: {
    position: "absolute",
    width: calcS(58),
    height: calcS(58),
    left: calcS(58),
    bottom: calcS(100),
    fontSize: calcS(45),
    textAlign: "center",
    textTransform: "uppercase",
    color: "#000000",
  },
});
export default styles;
