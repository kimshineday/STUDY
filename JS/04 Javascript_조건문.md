# 조건문
특정 조건에 부합할 경우 실행되는 코드를 만들때 사용한다.
## if 문
```js
if(조건식) {
	// 조건식이 참일 경우 코드 실행
}
```
if 뒤에 오는 (조건식)이 참일 경우, {코드} 실행을 하는 조건문.  
조건식은 '참/거짓'으로만 평가된다.  
```js
let num = 10;

if(num % 2 == 0) { // num을 2로 나눠 나머지가 0일 경우 짝수
    console.log(`${num} <- 이 숫자는 짝수 입니다.`);
}
```
나머지가 '0'일 경우에만 실행되기 때문에, 홀수 숫자를 입력할 경우에는 실행되지 않는다.  
### else 문
```js
if(조건식) {
	// 조건식이 참일 경우 코드 실행
}else{
	// 조건식이 거짓일 경우 코드 실행
}
```
else문을 사용해 조건식이 아닐 경우(거짓)에 실행되는 코드를 추가할 수 있다.  
```js
let num = 9;

if(num % 2 == 0) {
    console.log(`${num} <- 이 숫자는 짝수 입니다.`);
}else {
    console.log(`${num} <- 이 숫자는 홀수 입니다.`);
}
```
if문 조건식에서 거짓으로 판단, else문으로 넘어와 코드 실행이 되었다.  
else문은 무조건 if문에 딱 한번 사용할 수 있으며, 단독으로 사용은 못한다.  
### else if 문
```js
if(조건식1) {
	// 조건식1이 참일 경우 코드 실행
}else if(조건식) {
	// 조건식2가 참일 경우 코드 실행
}else{
	// 조건식이 거짓일 경우 코드 실행
}
```
if문에서 조건을 추가할때 사용한다.  
else if는 개수 제한 없이 여러 번 사용할 수 있으며, else문 사용 전에만 쓸 수 있다.  
```js
// 숫자 up and down
let inputNum = 5;
let answerNum = 2;

if(inputNum == answerNum) {
    console.log(`${inputNum} : 정답입니다!`);
}else if(inputNum > answerNum) {
    console.log(`${inputNum} : down!`);
}else {
    console.log(`${inputNum} : up!`);
}
```
간단하게 게임(?)을 만들어보았다.
```js
let answerNum = 2; 
var inputNum = 5; // 5 : down!

inputNum = 1; // 1 : up!
inputNum = 2; // 2 : 정답입니다!
```
## switch 문
```js
switch(key){
    case value1:
    	// key가 value1일 때 실행
        break;
    case value2:
    	// key가 value2일 때 실행
        break;
    default:
    	// 아무것도 일치하지 않을 경우 실행
        break;
}
```
switch 뒤에오는 key 값과 일치하는 case가 있을 경우 실행한다.  
일치 연산자(===)로 값과 자료형을 함께 비교하며 switch문에는 하나 이상의 case문과 default문, break문을 사용한다.  
```js
let food = 'banana';

switch(food) {
    case 'melon':
        console.log('fruit');
        break;
    case 'apple':
        console.log('fruit');
        break;
    case 'banana':
        console.log('fruit');
        break;
    case 'carrot':
        console.log('vagetable');
        break;
    default:
        console.log('과일도 아니고 야채도 아님');
        break;
}
```
해당되는 케이스로 가서 코드를 실행 후, break문에서 멈춘다.  
```js
let food = 'apple';

switch(food) {
    case 'melon': // 과일들끼리 묶어둠
    case 'apple':
    case 'banana':
        console.log('fruit');
        break;
    case 'carrot':
        console.log('vagetable');
        break;
    default:
        console.log('과일도 아니고 야채도 아님');
        break;
}
```
break문을 생략해서 사용할 수 있다. 실행하는 값이 같을 때 요긴하게 사용할 수 있을 듯하다.  
default문 같은 경우, if문에서의 else문에 해당이 되며 생략이 가능한 요소다.  
## if 문과 switch 문
```js
// if문
if(score >= 90 && score < 100) {
    console.log('학점 : A++')
}

// switch문
switch(score) {
    case 90:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 97:
    case 98:
    case 99:
    case 100:
        console.log('학점 : A++')
}
```
switch문은 조건으로 값을 받기 때문에 범위를 비교하는 경우에는 if문을 사용하는 것이 좋다.  
(아니면 위의 코드처럼 값을 하나하나 입력해줘야 한다.)  
```js
// switch문 예시 by. gemini
function getAccessLevel(role) {
  switch (role) {
    case 'admin':
    case 'super_user':
    case 'owner':
      return '모든 설정 변경 가능'; // 세 역할 모두 동일한 로직 실행

    case 'editor':
    case 'author':
      return '콘텐츠 수정 가능';

    default:
      return '읽기 전용';
  }
}
```
동일한 결괏값을 가진 여러 개의 케이스가 있을 경우, switch로 깔끔하게 그룹화해서 사용할 수 있다.  
```js
// if문으로 작성 시 ...
function getAccessLevel(role) {
  if (role === 'admin' || role === 'super_user' || role === 'owner') {
    return '모든 설정 변경 가능';
  } 
  else if (role === 'editor' || role === 'author') {
    return '콘텐츠 수정 가능';
  } 
  else {
    return '읽기 전용';
  }
}
```

[🔗 실습 코드 보러 가기](study_js_3_if_switch.js)