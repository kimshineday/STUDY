/* 
함수 정의 방법
- 함수 선언문 function declaration statement
- 함수 표현식 function expression
- 화살표 함수 arrow function
*/

// 함수 선언문
function gugudan2(){
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
}

gugudan2(); // 함수 호출

// 함수 표현식
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

// gugudan(); // 함수명으로 호출 시 에러. Uncaught ReferenceError: gugudan is not defined
gugudan2_();
gugudan3();

// 화살표 함수
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

// 매개변수와 인수 parameter, argument
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

const sum = function sum(num1, num2){
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

const sub = function sub(num1=10, num2=5){
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
};

sum();
sum(2, 4);
sub();
sub(4, 2);

// return 문
const sum_ = function sum_(num1, num2){
    result = num1 + num2
    return `${num1} + ${num2} = ${result}`
};

console.log('덧셈 ' + sum_(1, 2))