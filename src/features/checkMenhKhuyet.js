/* eslint-disable no-undef */
import $ from "jquery";

export function MenhKhuyet() {

}

let pointOfKim = 0;
let pointOfMoc = 0;
let pointOfThuy = 0;
let pointOfHoa = 0;
let pointOfTho = 0;

let resPoint = [pointOfKim, pointOfMoc, pointOfThuy, pointOfHoa, pointOfTho];

function thienCan2NguHanh(val) {
  switch (val) {
    case "Giáp":
      return "Mộc";
    case "Ất":
      return "Mộc";
    case "Bính":
      return "Hoả";
    case "Đinh":
      return "Hoả";
    case "Mậu":
      return "Thổ";
    case "Kỷ":
      return "Thổ";
    case "Canh":
      return "Kim";
    case "Tân":
      return "Kim";
    case "Nhâm":
      return "Thuỷ";
    case "Quý":
      return "Thuỷ";
  }
}

function diaChi2NguHanh(val) {
  switch (val) {
    case "Tý":
      return (val = [].concat("Quý"));
    case "Sửu":
      return (val = [].concat("Kỷ", "Quý", "Tân"));
    case "Dần":
      return (val = [].concat("Giáp", "Bính", "Mậu"));
    case "Mão":
      return (val = [].concat("Ất"));
    case "Thìn":
      return (val = [].concat("Mậu", "Ất", "Quý"));
    case "Tỵ":
      return (val = [].concat("Bính", "Mậu", "Canh"));
    case "Ngọ":
      return (val = [].concat("Đinh", "Kỷ"));
    case "Mùi":
      return (val = [].concat("Kỷ", "Đinh", "Ất"));
    case "Thân":
      return (val = [].concat("Canh", "Nhâm", "Mậu"));
    case "Dậu":
      return (val = [].concat("Tân"));
    case "Tuất":
      return (val = [].concat("Mậu", "Tân", "Đinh"));
    case "Hợi":
      return (val = [].concat("Nhâm", "Giáp"));
  }
}

function toPoint(resCan, resChi) {
  if (resCan === "Kim") pointOfKim += 100;
  if (resCan === "Mộc") pointOfMoc += 100;
  if (resCan === "Thuỷ") pointOfThuy += 100;
  if (resCan === "Hoả") pointOfHoa += 100;
  if (resCan === "Thổ") pointOfTho += 100;

  if (resChi.length == 1) {
    if (resChi === "Kim") pointOfKim += 100;
    if (resChi === "Mộc") pointOfMoc += 100;
    if (resChi === "Thuỷ") pointOfThuy += 100;
    if (resChi === "Hoả") pointOfHoa += 100;
    if (resChi === "Thổ") pointOfTho += 100;
  }
  if (resChi.length === 2) {
    if (resChi.indexOf("Kim") === 0) pointOfKim += 70;
    if (resChi.indexOf("Mộc") === 0) pointOfMoc += 70;
    if (resChi.indexOf("Thuỷ") === 0) pointOfThuy += 70;
    if (resChi.indexOf("Hoả") === 0) pointOfHoa += 70;
    if (resChi.indexOf("Thổ") === 0) pointOfTho += 70;

    if (resChi.indexOf("Kim") === 1) pointOfKim += 30;
    if (resChi.indexOf("Mộc") === 1) pointOfMoc += 30;
    if (resChi.indexOf("Thuỷ") === 1) pointOfThuy += 30;
    if (resChi.indexOf("Hoả") === 1) pointOfHoa += 30;
    if (resChi.indexOf("Thổ") === 1) pointOfTho += 30;
  }
  if (resChi.length === 3) {
    if (resChi.indexOf("Kim") === 0) pointOfKim += 60;
    if (resChi.indexOf("Mộc") === 0) pointOfMoc += 60;
    if (resChi.indexOf("Thuỷ") === 0) pointOfThuy += 60;
    if (resChi.indexOf("Hoả") === 0) pointOfHoa += 60;
    if (resChi.indexOf("Thổ") === 0) pointOfTho += 60;

    if (resChi.indexOf("Kim") === 1) pointOfKim += 30;
    if (resChi.indexOf("Mộc") === 1) pointOfMoc += 30;
    if (resChi.indexOf("Thuỷ") === 1) pointOfThuy += 30;
    if (resChi.indexOf("Hoả") === 1) pointOfHoa += 30;
    if (resChi.indexOf("Thổ") === 1) pointOfTho += 30;

    if (resChi.indexOf("Kim") === 2) pointOfKim += 10;
    if (resChi.indexOf("Mộc") === 2) pointOfMoc += 10;
    if (resChi.indexOf("Thuỷ") === 2) pointOfThuy += 10;
    if (resChi.indexOf("Hoả") === 2) pointOfHoa += 10;
    if (resChi.indexOf("Thổ") === 2) pointOfTho += 10;
  }
}

function calculatePoint() {
  const chiNam = $("#chiNam").val();
  const canNam = $("#canNam").val();
  const chiThang = $("#chiThang").val();
  const canThang = $("#canThang").val();
  const chiNgay = $("#chiNgay").val();
  const canNgay = $("#canNgay").val();
  const chiGio = $("#chiGio").val();
  const canGio = $("#canGio").val();
  //Tính ngũ hành năm
  let resChiNam = [];
  for (let i = 0; i < 3; i++) {
    if (diaChi2NguHanh(chiNam)[i] != null)
      resChiNam[i] = thienCan2NguHanh(diaChi2NguHanh(chiNam)[i]);
  }
  let resCanNam = [thienCan2NguHanh(canNam)];
  resNam = [].concat(resCanNam, resChiNam);

  let resChiThang = [];
  for (i = 0; i < 3; i++) {
    if (diaChi2NguHanh(chiThang)[i] != null)
      resChiThang[i] = thienCan2NguHanh(diaChi2NguHanh(chiThang)[i]);
  }
  let resCanThang = [thienCan2NguHanh(canThang)];
  resThang = [].concat(resCanThang, resChiThang);

  let resChiNgay = [];
  for (i = 0; i < 3; i++) {
    if (diaChi2NguHanh(chiNgay)[i] != null)
      resChiNgay[i] = thienCan2NguHanh(diaChi2NguHanh(chiNgay)[i]);
  }
  let resCanNgay = [thienCan2NguHanh(canNgay)];
  resNgay = [].concat(resCanNgay, resChiNgay);

  let resChiGio = [];
  for (i = 0; i < 3; i++) {
    if (diaChi2NguHanh(chiGio)[i] != null)
      resChiGio[i] = thienCan2NguHanh(diaChi2NguHanh(chiGio)[i]);
  }
  let resCanGio = [thienCan2NguHanh(canGio)];
  resGio = [].concat(resCanGio, resChiGio);

  toPoint(resCanNam, resChiNam);
  toPoint(resCanThang, resChiThang);
  toPoint(resCanNgay, resChiNgay);
  toPoint(resCanGio, resChiGio);

  console.log("Năm:", resNam);
  console.log("Tháng:", resThang);
  console.log("Ngày:", resNgay);
  console.log("Giờ:", resGio);

  console.log("Điểm Mộc: ", pointOfMoc);
  console.log("Điểm Thuỷ: ", pointOfThuy);
  console.log("Điểm Hoả: ", pointOfHoa);
  console.log("Điểm Thổ: ", pointOfTho);

  document.getElementById("diemKim").innerHTML = pointOfKim;
  document.getElementById("diemMoc").innerHTML = pointOfMoc;
  document.getElementById("diemThuy").innerHTML = pointOfThuy;
  document.getElementById("diemHoa").innerHTML = pointOfHoa;
  document.getElementById("diemTho").innerHTML = pointOfTho;
}

function resetPoint() {
  pointOfHoa = 0;
  pointOfTho = 0;
  pointOfThuy = 0;
  pointOfMoc = 0;
  pointOfKim = 0;

  console.clear();

  document.getElementById("diemKim").innerHTML = pointOfKim;
  document.getElementById("diemMoc").innerHTML = pointOfMoc;
  document.getElementById("diemThuy").innerHTML = pointOfThuy;
  document.getElementById("diemHoa").innerHTML = pointOfHoa;
  document.getElementById("diemTho").innerHTML = pointOfTho;
}

function evaluatePoint(array) {
  console.log(array);
}
