import avocado from "./avocado.jpg";
import banana from "./banana.webp";
import bread from "./bread.webp";
import muskrat from "./muskrat.webp";
import pickle from "./pickle.webp";
import rat from "./rat.jpg";

const imgNames = [
  avocado,
  banana,
  bread,
  muskrat,
  pickle,
  rat,
  avocado,
  banana,
  bread,
];
function template() {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push({
      id: i,
      name: `Name#${i}`,
      price: i * 15,
      img: `./${imgNames[i]}`,
      info: `About #${i} about #${i} about #${i} about #${i}`,
    });
  }
  return arr;
}

export default template;
