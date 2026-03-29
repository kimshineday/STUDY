# 표준 내장 객체
자바스크립트 안에 다양한 객체들이 미리 만들어져 있다. 이를 표준 내장 객체라고 한다.  
스코프 위치를 따지지 않고 모든 영역에서 공통으로 사용할 수 있다.  
🔗Javascript 표준 내장 객체  
## 문자열, String 객체
문자열에서 사용 가능한 속성과 메서드가 있다.
```js
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
```
## 배열, Array 객체
배열에서 사용할 수 있는 속성과 메서드가 있다.  
파괴적 메서드(원본 데이터를 변경하는 메서드)와 비퍄괴적 메서드(원본을 변경하지 않는 메서드)로 나뉜다.  
```js
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

arr.shift(); // 배열 맨 앞에서 요소 추출
console.log(arr); // [10, 20, 30]

// 비파괴적 메서드 : 원본을 변경하지 않음
// forEach()
arr.forEach(function(v){
    console.log(v); // 배열 요소에 접근과 비슷하다.
});
console.log(arr); // [10, 20, 30]
```
## 날짜와 시간, Date 객체
자바스크립트로 날짜와 시간을 처리할때 사용할 수 있다.  
```js
const date1 = new Date(); // new 키워드를 사용해 객체화. (없을 경우 단순 문자열로 출력되고 끝남.)

console.log(date1); // Sun Mar 29 2026 22:43:58 GMT+0900 (Korean Standard Time)

const date2 = new Date(2026, 0, 1); // 월은 0부터 시작. 0(1월) - 11(12월)
console.log(date2); // Thu Jan 01 2026 00:00:00 GMT+0900 (Korean Standard Time)

// 직접적으로 날짜를 넣을땐 1-12월 사용
const date3 = new Date('2026-01-01');
console.log(date3); // Thu Jan 01 2026 09:00:00 GMT+0900 (Korean Standard Time)

const date4 = new Date('2026/01/01/22:59:34');
console.log(date4); // Thu Jan 01 2026 22:59:34 GMT+0900 (Korean Standard Time)
```
### Date 객체의 메서드
`getFullYear()` / `setFullYear()` : 연도를 4자리 숫자로 표시\
`getMonth()` / `setMonth()` : 월, 0 - 11까지 숫자로 표시\
`getDate()` / `setDate()` : 일, 1 - 31까지 숫자로 표시\
`getDay()` : 요일, 0 - 6까지 숫자로 표시 (일 -> 0 , 토 -> 6)\
`getTime()` / `setTime()` : 1970년 1월 1일 12:00 이후의 시간을 밀리초(1/1000초) 단위로 표시\
`getHours()` / `setHours()` : 시, 0 - 23까지 숫자로 표시\
`getMinutes()` / `setMinutes()` : 분, 0 - 59까지 숫자로 표시\
`getSeconds()` / `setSeconds()`	: 초, 0 - 59까지 숫자로 표시\
`getMilliseconds()` / `setMilliseconds()` : 밀리초, 0 - 999까지의 숫자로 표시  

### 날짜 간격 계산
```js
const datetime1 = new Date(2026, 0, 1); 
const datetime2 = new Date(2026, 2, 29);
const dateDiff = datetime2.getTime() - datetime1.getTime(); // 밀리초 전환 후, 계산
const interval = dateDiff / (24 * 60 * 60 * 1000); // 단위 변환

console.log(`두 날짜의 차이는 ${interval}일 입니다.`); // 두 날짜의 차이는 87일 입니다.
```
## 수학 연산, Math 객체
```js
const floatNum = 10.52;

console.log(Math.floor(floatNum)); // 10, 내림
console.log(Math.ceil(floatNum)); // 11, 올림
console.log(Math.round(floatNum)); // 11, 반올림
```
인스턴스를 생성해서 사용하는 Date 객체와는 다르게 new 키워드 없이 사용이 가능하다.  
수학에 약한 나로서는 ... 손이 잘 안 가는 모듈이다.  
많은 메서드들이 있기 때문에 사용하면서 찾아보고, 공부해야 할 듯하다.  