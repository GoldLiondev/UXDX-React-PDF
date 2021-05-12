import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";

// Create styles
const styles = StyleSheet.create({
  showBarStyle: { marginLeft: calcS(331), marginTop: calcS(40) },
  Row: {
    flexDirection: "row",
  },
  Col: {
    flexDirection: "column",
  },
  roles: {
    marginLeft: calcS(335),
  },
  Image32: {
    width: calcS(1898),
    marginLeft: calcS(340),
    marginTop: calcS(1),
  },
  AudienceView: {},
  Audience: {
    width: calcS(850),
    height: calcS(70),
    marginTop: calcS(104),
    fontSize: calcS(45),
    fontWeight: 700,
    fontFamily: "SpenSansSemiBold",
    color: "#4E4E4E",
    textTransform: "uppercase",
  },
  subAudience: {
    width: calcS(794),
    height: calcS(123),
    fontSize: calcS(30),
    marginTop: calcS(3),
    fontWeight: 400,
    color: "#727272",
    letterSpacing: calcS(1.2),
  },
  seniorityView: {
    marginLeft: calcS(170),
  },
  seniorityPart1: {
    fontFamily: "SpenSansSemiBold",
    color: "#4E4E4E",
    textTransform: "uppercase",
    width: calcS(869),
    height: calcS(70),
    marginTop: calcS(104),
    fontSize: calcS(45),
    fontWeight: 700,
  },

  seniorityPart2: {
    color: "#727272",
    width: calcS(804),
    height: calcS(123),
    fontSize: calcS(30),
    marginTop: calcS(3),
    fontWeight: 400,
    letterSpacing: calcS(1.2),
  },
  ImageChart: {
    marginLeft: calcS(327),
  },
  Image13: {
    width: calcS(900),
    height: calcS(655),
    marginTop: calcS(8),
  },
  Image14: {
    marginLeft: calcS(83),
    marginTop: calcS(41),
    width: calcS(751),
    height: calcS(589),
  },
  companyView: {
    marginLeft: calcS(341),
  },
  companyHeader: {
    fontFamily: "SpenSansSemiBold",
    color: "#4E4E4E",
    textTransform: "uppercase",
    width: calcS(869),
    height: calcS(70),
    marginTop: calcS(104),
    fontSize: calcS(45),
    fontWeight: 700,
  },
  companyContent: {
    color: "#727272",
    width: calcS(1873),
    height: calcS(82),
    fontSize: calcS(30),
    marginTop: calcS(3),
    fontWeight: 400,
    letterSpacing: calcS(1.2),
  },
  imageLineChart: {
    width: calcS(1700),
    height: calcS(618),
    marginTop: calcS(27),
    marginLeft: calcS(299),
  },
  footerText1: {
    width: calcS(1111),
    height: calcS(333),
    marginTop: calcS(40.87),
    fontWeight: 600,
    fontSize: calcS(35),
    letterSpacing: calcS(2),
    lineHeight: calcS(1.2),
    color: "white",
  },
  LastContent: {
    flexDirection: "row",
    width: calcS(1878),
    height: calcS(704),
    left: calcS(340),
    backgroundColor: "#0284C7",
    borderRadius: calcS(30),
  },
});
export default styles;
