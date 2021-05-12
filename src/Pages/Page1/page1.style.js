import { StyleSheet } from "@react-pdf/renderer";
import { calcS } from "../../utils/calcSize";

// Create styles
const styles = StyleSheet.create({
  ParaView: {
    height: calcS(260),
    width: calcS(1780),
    left: calcS(341),
  },
  SubGroup: {
    flexDirection: "row",
    width: calcS(1740),
    left: calcS(341),
  },
  SubGroup1: { height: calcS(315), marginTop: calcS(99) },
  SubGroup2: { height: calcS(330), marginTop: calcS(99) },
  SubGroup3: { height: calcS(324), marginTop: calcS(100) },
  SubGroup4: { height: calcS(315), marginTop: calcS(99) },
  LastContent: {
    flexDirection: "row",
    width: calcS(1878),
    height: calcS(704),
    left: calcS(340),
    marginTop: calcS(172),
    backgroundColor: "#0284C7",
    borderRadius: calcS(30),
  },
  SubHeading: {
    fontFamily: "SpenSansSemiBold",
    fontSize: calcS(45),
    color: "#4E4E4E",
    letterSpacing: calcS(1.5),
  },
  HeadingParagraph: {
    top: calcS(23),
    fontWeight: 400,
    fontSize: calcS(40),
    color: "#727272",
    letterSpacing: calcS(1.5),
  },
  HeadingParagraph1: {
    width: calcS(1166),
    height: calcS(162),
    top: calcS(18),
  },
  HeadingParagraph2: {
    width: calcS(1166),
    height: calcS(216),
    left: calcS(610),
    top: calcS(18),
  },
  HeadingParagraph3: {
    width: calcS(1166),
    height: calcS(216),
    top: calcS(18),
  },
  HeadingParagraph4: {
    width: calcS(1166),
    height: calcS(216),
    top: calcS(18),
    left: calcS(610),
  },
  AwarenessPIC: {
    position: "absolute",
    width: calcS(436),
    height: calcS(315),
    left: calcS(1300),
  },
  AuthorityPIC: {
    position: "absolute",
    width: calcS(341),
    height: calcS(314),
    left: calcS(0),
  },
  EducationPIC: {
    position: "absolute",
    width: calcS(394),
    height: calcS(315),
    left: calcS(1386),
  },
  RecruitmentPIC: {
    position: "absolute",
    width: calcS(368),
    height: calcS(315),
    left: calcS(0),
  },
  LastContentPIC: {
    width: calcS(500),
    height: calcS(503),
    left: calcS(121),
    top: calcS(100),
  },
  LastSubContent: {
    flexDirection: "column",
    width: calcS(1111),
    height: calcS(500),
    left: calcS(206),
    borderRadius: calcS(30),
  },
  QuotePIC: {
    width: calcS(81.81),
    height: calcS(65.88),
    left: calcS(0),
    marginTop: calcS(111.25),
  },
  Quotestyle: {},
});
export default styles;
