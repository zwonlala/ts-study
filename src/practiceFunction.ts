//function sum(x, y) {}
//function sum(x: any, y: any) {
function sum(x: number, y: number) {
  return x + y;
}

// function sum(x: number, y: number): number {
//   return x + y;
//return 생략,
//return "abc";
// 하면 에러
// }

const result = sum(1, 2);
//result의 타입도 짐작이 감!
