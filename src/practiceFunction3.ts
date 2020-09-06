function returnNothing() {
  console.log("리턴은 안하고 딴 것만 함");
  //   return true;
}

returnNothing(); //함수 호출부분 마우스 가져다 대면, "function returnNothing(): void"라고 뜸

//return true; 넣으면 "function returnNothing(): boolean"이라고 뜸

// function returnNothing(): void {
//   console.log("리턴은 안하고 딴 것만 함");
//   //   return true;
//   return true;
// }
// returnNothing();
// 이렇게 해도 에러

function returnStringOrNumber(): string | number {
  return "asdf";
  // return 4;
}
