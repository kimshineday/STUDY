console.log('확장 프로그램 사용')

// 한 줄 주석

/* 
긴 줄 주석 
*/

// 오류 났을 경우 확인 방법 체크
// consol.log('오류 억지로 만들기')

/* Data type */
// 문자열
let string1 = "Hello, world!";
let string2 = 'hello, world!';

console.log(string1);
console.log(string2);

let str1 = '문자열은 큰따옴표로(")로 묶어주거나'
let str2 = "작은따옴표(')로 묶어줘야한다."

console.log(str1)
console.log(str2)

// 이스케이프 문자
let string3 = '문자열은 큰따옴표(")나 작은따옴표(\')로 감싸면 됩니다.';
console.log(string3);

// 탬플릿 문자열
let string4 = `문자열은 큰따옴표(")나 
작은따옴표(')로 감싸면 됩니다.
enter도 적용이 됩니다.`;

console.log(string4);

let x = 3;
let y = 4;
let string5 = `${x} * ${y} = ${x * y}`

console.log(string5)

// 문자열 연결 연산자 (+)
let str3 = '문자열' + '합치기';

console.log(str3);

// 숫자형
let num = 0.1 + 0.2;

console.log(num);

// 논리형
let bool1 = true;
let bool2 = false;

console.log(bool1);
console.log(bool2);

let bool3 = 10 < 20;
let bool4 = 10 > 20;

console.log(bool3);
console.log(bool4);

// undefined
let empty;

console.log(empty);

// null
let empty2 = null;

console.log(empty2);

// 객체, 배열
let studentScore = [80, 70, 90, 60];

console.log(studentScore[2]); // 2번 인덱스 데이터 접근

let array1 = []; // 빈 배열
let array2 = ['str', 10, true, undefined, null]; // 다양한 자료형을 넣을 수 있다.

// 객체 리터럴
let studentScore2 = {
    koreanScore: 80,
    englishScore: 70,
    mathScore: 90,
    scienceScore: 60
};

console.log(studentScore2.koreanScore);
console.log(studentScore2['koreanScore']);