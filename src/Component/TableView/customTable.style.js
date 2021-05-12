import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";
// Create styles
const customstyles = StyleSheet.create({
  TableHeader: {
    backgroundColor: "#FAFAFA",
  },
  ViewStyle: { border: calcS(5) + " solid #EDEDEF" },
  tdStyle: {},
  trStyle: { borderTop: calcS(3) + "solid #EDEDEF" },
  BorderStyle: {
    borderTop: calcS(3) + " solid #EDEDEF",
  },
});
const staticstyles = StyleSheet.create({
  trStyle: { borderBottom: calcS(3) + " solid #504F4F" },
  tdStyle: { borderLeft: calcS(3) + " solid #504F4F" },
  TableHeader: {
    borderLeft: calcS(3) + " solid #504F4F",
    borderBottom: calcS(3) + " solid #504F4F",
  },
  ViewStyle: {
    borderTop: calcS(3) + " solid #504F4F",
    borderRight: calcS(3) + " solid #504F4F",
  },
  BorderStyle: {
    borderTop: calcS(3) + " solid #504F4F",
  },
});
const chooseStyle = (type) => {
  return type ? customstyles : staticstyles;
};
export default chooseStyle;
