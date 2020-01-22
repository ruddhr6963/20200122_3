import "./styles.css";

// 태그 추가하여 화면 출력
// 1.
const arr = ["A", "B", "C", "D"];

const dispArr = arr => {
  return arr.map(item => "<div>" + item + "</div>")
};

console.log(dispArr(arr));

// 2. 신규 추가 기능 (간단)
const dispArr2 = arr => {
  return arr.map(item => '<div>${item}</div>');
};

console.log(dispArr2(arr));
document.getElementById("app");

// 복수개의 <div></div> 연결시 , 붙음
// 연결시 , 붙지 않게 join() 사용
document.getElementById("app").innerHTML = dispArr(arr).join("");