const defaultsizeW = 2480;
// const defaultsizeH=3508;
const Totalwidth = 595.28;
const Totalheight = 841.89;

const calcS = (size) => {
  return (size * Totalwidth) / defaultsizeW + "px";
};

const isOdd = (index) => {
  return index % 2 === 1;
};
module.exports = { calcS, Totalwidth, Totalheight, isOdd };
