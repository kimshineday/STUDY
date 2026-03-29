// 표준 내장 객체

// String 객체
// length 속성
const pw = "098";
if(pw.length <4){
    console.log('비밀번호는 최소 4자리 이상으로 설정 해주세요.');
}

// includes() 메서드
const email = 'test.test.com';
if(email.includes('@') === false){
    console.log('올바른 이메일 형식이 아닙니다.');
}

// indexOf() 메서드
if(email.indexOf('@') === -1){ // 일치하는 첫 번째 문자의 인덱스 반환
    console.log('올바른 이메일 형식이 아닙니다.');
}


// 배열 Araay 객체
const arr = [10, 20, 30];

// length 속성
for(let i = 0; i < arr.length; i++){ // 요소의 개수 구하기
    console.log(arr[i]);
}

// 파괴적 메서드 : 원본 데이터를 변경
// 데이터 추가 및 추출(제거, 반환)의 기능 등등 ...
// push(), pop(), unshift(), shift()
arr.push(40); // 베열 맨 뒤 40 추가
console.log(arr); // [10, 20, 30, 40]

arr.pop(); // 배열 맨 뒤 요소 추출
console.log(arr); // [10, 20, 30]

arr.unshift(0); // 배열 앞 추가
console.log(arr); // [0, 10, 20, 30]

arr.shift(); // 배열 맨 아ㅑㅍ에서 요소 추출
console.log(arr); // [10, 20, 30]

// 비파괴적 메서드 : 원본을 변경하지 않음
// forEach()
arr.forEach(function(v){
    console.log(v); // 배열 요소에 접근과 비슷하다.
});
console.log(arr); // [10, 20, 30]


// Data 객체
const date1 = new Date(); // new 키워드를 사용해 객체화. (없을 경우 단순 문자열로 출력되고 끝남.)

console.log(date1); // Sun Mar 29 2026 22:43:58 GMT+0900 (Korean Standard Time)

const date2 = new Date(2026, 0, 1); // 월은 0부터 시작. 0(1월) - 11(12월)
console.log(date2); // Thu Jan 01 2026 00:00:00 GMT+0900 (Korean Standard Time)

// 직접적으로 날짜를 넣을땐 1-12월 사용
const date3 = new Date('2026-01-01');
console.log(date3); // Thu Jan 01 2026 09:00:00 GMT+0900 (Korean Standard Time)

const date4 = new Date('2026/01/01/22:59:34');
console.log(date4); // Thu Jan 01 2026 22:59:34 GMT+0900 (Korean Standard Time)

// 날짜 간격 계산
const datetime1 = new Date(2026, 0, 1); 
const datetime2 = new Date(2026, 2, 29);
const dateDiff = datetime2.getTime() - datetime1.getTime(); // 밀리초 전환 후, 계산
const interval = dateDiff / (24 * 60 * 60 * 1000); // 단위 변환

console.log(`두 날짜의 차이는 ${interval}일 입니다.`); // 두 날짜의 차이는 87일 입니다.


// Math 객체
const floatNum = 10.52;

console.log(Math.floor(floatNum)); // 10, 내림
console.log(Math.ceil(floatNum)); // 11, 올림
console.log(Math.round(floatNum)); // 11, 반올림