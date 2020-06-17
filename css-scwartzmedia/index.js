"use strict";

//함수는 정수 이상의 수를 천의자릿수마다 콤마를 넣습니다.
//소수점 이하의 수를 파악하여 콤마가 추가된 정수와 소숫점을 연결하여 문자열을 반환합니다.
function addComma(number) {
  let head = getHead(number); //추가할 천의자리수를 가져옵니다.
  const underNum = getFloat(number); //소숫점이하의 수를 가져옵니다.
  let numberInt = parseInt(number).toString(); //정수를 문자열로 변경합니다.
  let cnt = 0;
  for (let j = numberInt.length; j >= 0; j--) {
    if (head > 0) {
      if (cnt >= 3) {
        numberInt = [numberInt.slice(0, j), ",", numberInt.slice(j)].join("");
        head--;
        cnt = 1;
      } else {
        ++cnt;
      }
    }
  }
  return numberInt + underNum;
}
function getHead(number) {
  let head = 0;
  let calcNum = Math.abs(number);
  while (true) {
    calcNum /= 1000;
    if (calcNum >= 1) {
      head++;
    } else if (calcNum < 1) {
      break;
    }
  }
  return head;
}
function getFloat(number) {
  const stringNumber = number.toString();
  const getDot = stringNumber.indexOf(".");
  let underIndex = 0;
  let result = 0;

  //소숫점이 없다면. 함수 종료
  if (getDot === -1) {
    return "";
  }

  for (let i = getDot; i < stringNumber.length - 1; i++) {
    underIndex++;
  }
  result = Math.abs(number - parseInt(number))
    .toFixed(underIndex)
    .substring(1);

  console.log(result);
  return result;
}
