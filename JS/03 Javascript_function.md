# 함수 Function
어떤 목적을 가지고 작성한 코드를 모아 둔 블록문.  
계속해서 반복으로 쓰이는 코드들을 함수로 정의해 필요시마다 호출해 사용할 수 있다.  
아래의 3가지 방법으로 함수를 선언한다.  
## 함수 정의
### 함수 선언문 function declaration statement
```js
// 함수 선언문
function 식별자(){함수 호출 시 실행 코드}

// 함수 호출
함수명();
```
`function` 키워드를 사용해 함수를 정의하는 방법.
```js
function gugudan2(){
    console.log(`2 * 1 = ${2 * 1}`)
    console.log(`2 * 2 = ${2 * 2}`)
    console.log(`2 * 3 = ${2 * 3}`)
    console.log(`2 * 4 = ${2 * 4}`)
    console.log(`2 * 5 = ${2 * 5}`)
    console.log(`2 * 6 = ${2 * 6}`)
    console.log(`2 * 7 = ${2 * 7}`)
    console.log(`2 * 8 = ${2 * 8}`)
    console.log(`2 * 9 = ${2 * 9}`)
}
```
구구단 2단 출력하는 함수를 선언. (책에서는 for문 사용)  

### 함수 표현식 function expression
```js
const 변수명 = function(){}; // 익명 함수
const 변수명 = function 식별자(){}; // 네이밍 함수

// 함수 호출
변수명();
```
함수 선언과 동시에 함수를 변수에 할당한다.  
함수 표현식으로 정의할때 보통 const 키워드를 사용한다. (재정의, 재할당 방지)  
호출 시 함수명으로 하는 것이 아닌 할당된 변수 이름으로 해야 한다.  

식별자 유무에 따라 '익명 함수'와 '네이밍 함수'로 나뉘게 된다.  
네이밍 함수로 변수명과 식별자를 동일하게 설정하는 게 좋다고 한다.  
> - 익명 함수: 간결함, 일회성 콜백 등에 자주 쓰임.  
> - 네이밍 함수: 디버깅이 편하고 가독성이 좋음. 함수 내에서 자기 자신(함수)를 호출할 때 식별자를 사용.  

```js
const gugudan2_ = function gugudan(){
    // 2단 출력
    console.log(`2 * 1 = ${2 * 1}`);
    console.log(`2 * 2 = ${2 * 2}`);
    console.log(`2 * 3 = ${2 * 3}`);
    console.log(`2 * 4 = ${2 * 4}`);
    console.log(`2 * 5 = ${2 * 5}`);
    console.log(`2 * 6 = ${2 * 6}`);
    console.log(`2 * 7 = ${2 * 7}`);
    console.log(`2 * 8 = ${2 * 8}`);
    console.log(`2 * 9 = ${2 * 9}`);
};

const gugudan3 = function(){
    // 3단 출력
    console.log(`3 * 1 = ${3 * 1}`);
    console.log(`3 * 2 = ${3 * 2}`);
    console.log(`3 * 3 = ${3 * 3}`);
    console.log(`3 * 4 = ${3 * 4}`);
    console.log(`3 * 5 = ${3 * 5}`);
    console.log(`3 * 6 = ${3 * 6}`);
    console.log(`3 * 7 = ${3 * 7}`);
    console.log(`3 * 8 = ${3 * 8}`);
    console.log(`3 * 9 = ${3 * 9}`);
};
```
여기서 식별자 'gugudan'으로 호출할 경우에는 에러가 발생한다.  

### 화살표 함수 arrow function
```js
() => {};
```
'익명 함수'의 또 다른 정의 방식. (ES6에서 추가, 이 방식으로 많이 쓰임)  

```js
const gugudan4 = () => {
    // 4단 출력
    console.log(`4 * 1 = ${4 * 1}`);
    console.log(`4 * 2 = ${4 * 2}`);
    console.log(`4 * 3 = ${4 * 3}`);
    console.log(`4 * 4 = ${4 * 4}`);
    console.log(`4 * 5 = ${4 * 5}`);
    console.log(`4 * 6 = ${4 * 6}`);
    console.log(`4 * 7 = ${4 * 7}`);
    console.log(`4 * 8 = ${4 * 8}`);
    console.log(`4 * 9 = ${4 * 9}`);
};

gugudan4();
```
## 매개변수와 인수 parameter, argument
```js
// 함수 선언문
function 함수명(매개변수들){}

// 함수 표현식
const 함수명 = function 식별자(매개변수들){};

// 화살표 함수
const 함수명 = (매개변수들) => {};


// 함수 호출
함수명(인수들);
```
> - 매개변수 : 함수를 정의할 때, 외부에서 전달하는 데이터를 함수에서 받을 수 있도록 정의  
> - 인수 : 호출할 때 전달하고 싶은 데이터를 작성.  

쉽게 접근하자면, 구구단을 다른 단으로 바꿀 때마다 숫자를 하나하나 교체해야 하는 귀찮은 이 방법을 해결할 수 있다.
```js
const gugudan = (num) => { // 화살표 함수로 작성
    console.log(`${num} * 1 = ${num * 1}`);
    console.log(`${num} * 2 = ${num * 2}`);
    console.log(`${num} * 3 = ${num * 3}`);
    console.log(`${num} * 4 = ${num * 4}`);
    console.log(`${num} * 5 = ${num * 5}`);
    console.log(`${num} * 6 = ${num * 6}`);
    console.log(`${num} * 7 = ${num * 7}`);
    console.log(`${num} * 8 = ${num * 8}`);
    console.log(`${num} * 9 = ${num * 9}`);
};

gugudan(1); // 1단
gugudan(12); // 12단
```
화살표 함수에서 매개변수가 한 개일 경우, () 생략 `num => {}` 작성 가능하다.  

변동이 있을 수 있는 값을 매개변수로 활용해 함수를 선언, 호출 시 인수로 값을 넣는다.  
```js
const sum = function sum(num1, num2){
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

const sub = function sub(num1=10, num2=5){ // 기본 값 할당
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
};

sum(); // undefined + undefined = NaN
sum(2, 4); // 2 + 4 = 6
sub(); // 10 - 5 = 5
sub(4, 2); // 4 - 2 = 2
```
매개변수와 인수가 여러 개인 경우에는 순서대로 매칭이 되고,  
매개변수 정의 시, 기본 값 할당을 할 수 있다.  
기본 값 할당이 안 되어있는 경우 'undefined' 값이 자동으로 할당된다.  

## return 문 : 반환 값
함수 외부로 데이터를 반환할 때 return 문을 사용한다.  
> **Scope 스코프**  
> 변수나 함수와 같은 참조 대상 식별자를 찾아내기 위한 규칙.  
> - 함수 스코프 function scope : 함수에서 정의한 블록문만 유효 범위로 인정  
> - 블록 스코프 block scope : {}로 구성된 블록문 기준. (`let`, `const` 키워드로 선언한 변수만 적용)  

스코프 규칙이 있기 때문에, 함수에서 생성된 값들은 외부로 가지고 나오기 위해서 'return'으로 값을 반환해야 한다.  
return 없이는 외부로 함수 내의 값을 가지고 나올 수 없다.  
```js
const sum_ = function sum_(num1, num2){
    result = num1 + num2
    `${num1} + ${num2} = ${result}`
};

console.log('덧셈 ' + sum_(1, 2)); // 덧셈 undefined

const sum_ = function sum_(num1, num2){
    result = num1 + num2
    return `${num1} + ${num2} = ${result}`
};

console.log('덧셈 ' + sum_(1, 2)); // 덧셈 1 + 2 = 3
```
기존 함수에서는 함수 내부에서 출력, 함수에서는 값만 산출해 외부에서 출력하는 방식으로 바꾸었다.  
return 반환 값이 없을 경우 'undefined'으로 출력이 된다.  