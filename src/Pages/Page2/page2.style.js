import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";

// Create styles
const styles = StyleSheet.create({
  LastContent: {
    flexDirection: "row",
    width: calcS(1878),
    height: calcS(704),
    left: calcS(340),
    marginTop: calcS(449),
    backgroundColor: "#0284C7",
    borderRadius: calcS(30),
  },
});
export default styles;
