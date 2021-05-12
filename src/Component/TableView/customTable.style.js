import { StyleSheet } from "@react-pdf/renderer";

// Create styles
const customstyles = StyleSheet.create({
  TableHeader: {
    backgroundColor: "#FAFAFA",
  },
  ViewStyle: { border: "5px solid #EDEDEF" },
  tdStyle: {},
  trStyle: { borderTop: "3px solid #EDEDEF" },
  BorderStyle: {
    borderTop: "3px solid #EDEDEF",
  },
});
const staticstyles = StyleSheet.create({
  trStyle: { borderBottom: "3px solid #504F4F" },
  tdStyle: { borderLeft: "3px solid #504F4F" },
  TableHeader: {
    borderLeft: "3px solid #504F4F",
    borderBottom: "3px solid #504F4F",
  },
  ViewStyle: {
    borderTop: "3px solid #504F4F",
    borderRight: "3px solid #504F4F",
  },
  BorderStyle: {
    borderTop: "3px solid #504F4F",
  },
});
const chooseStyle = (type) => {
  return type ? customstyles : staticstyles;
};
export default chooseStyle;
