# 반복문
지정 조건이 참으로 평가될때, 지정 블록문을 반복해서 실행한다.  
> **무한 반복문**\
> 반복문의 조건이 계속 참으로 평가되어 반복문이 끝나지 않고 계속 실행되는 반복문\

반복문을 사용할때 주의할 점은 '무한 반복문'.\
프로그램의 성능을 저하시킬 수 있으므로 거짓으로 판단되어 멈추는 순간이 있는지 신경 써야 한다.  
## while 문
```js
while(조건식){
	// 조건식이 참일 경우 실행
}
```
특정 조건을 만족하는 동안 블록문을 실행한다.
```js
let count = 1; // 카운트 변수 초기화

while(count <=9999){ // 카운트 숫자가 9999 이하일때 실행
    console.log(count); // 숫자 출력
    count++; // 카운트 숫자 증가
}
```
### do...while 문
```js
do{
	// 블록문
}while(조건식);
```
블록문을 한번 수행 후, 조건식을 평가한다.
```js
let count2 = 1;

do{
    console.log(count2);
    count2++;
}while(count2 <= 10);
```
### while 문과 do...while문 비교
```js
// 비교
while(false){
    console.log('거짓으로 판단, 출력 X');
}

do{
    console.log('무조건 한번은 실행');
}while(false);
```
do...while문에서는 조건이 거짓이어도 블록문을 한 번은 실행시킨다.\
+) VSC에서도 실행되지 않는 코드로 인식, 어둡게 보여진다.
## for 문
```js
for(초깃값; 조건식; 증감식){
	// 블록문
}
```
for문에서는 횟수를 지정해서 반복 실행할 수 있다.\
`초깃값 -> 조건식 -> 블록문(조건식이 참일 경우) -> 증감식 -> 조건식` 순서로 실행이 되며, 초기 값은 최초 1회만 실행된다.  
```js
// 카운트 다운!
for(let i = 10; i >= 0; i--){ // i = 10, i가 0 이상이면 블록문 실행, 1씩 감소
    // 블록문
    if(i==0){
        console.log('0, 땡!'); // i가 0일 경우 실행
    }else{
        console.log(i); // i가 0이 아닐 경우 실행
    }
}
```
i = 10 // 초기화\
i 가 0 보다 클 경우 블록문 실행.\
if문 : 0일 경우 '0, 땡!' 출력, 아닐 경우 숫자 출력\
블록문 실행 후 i 값 1 감소  

i 가 0이 되면 출력 후 반복문 종료.

### for 문에서의 배열
```js
let arr = ['banana', 'apple', 'orange'];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
```
length 속성을 사용해서 배열 요소의 개수에 접근, for문으로 반복해 출력할 수 있다.  
> **length 속성**\
> 데이터의 길이를 알 수 있다.\
> 배열에서는 데이터 개수(배열의 길이)를 확인할 수 있다.\
> `let str = '글자수 확인 가능';`\
> `console.log(str.length);`\
> `// 9`

### for...in 문
```js
for(가변수 in 배열/객체 리터럴){
	// 블록문
}
```
in 오른쪽에는 탐색 대상(배열, 객체 리터럴), 왼쪽에는 키를 저장할 임시변수(가변수)를 둔다.  
```js
// 배열
for(let index in arr){ // 가변수에는 인덱스 값(문자열 형식으로 담김)으로 담아낸다.
    console.log(arr[index]);
}

// 객체 리터럴
let obj = {'name': '철수', 'age': '20'};

for(let key in obj){ // 가변수에 객체 리터럴의 key가 할당된다.
	console.log(`${key} : ${obj[key]}`)
}
```
## break 문
인위적으로 반복문을 종료하는 방법.
```js
for(let i = 0; i < 10; i++){
	console.log(i);
    if(i === 5) break;
}
```
i 의 값이 10이 될 때까지 반복이 되어야 하지만 if문으로 i 가 5일 경우 break; 지정이 되어 5까지만 출력이 된다.  
## continue 문
건너뛰고 실행하라는 명령.
```js
for(let i = 1; i <= 10; i++){ // i가 10 이하일 때
    if(i % 2 === 1) continue; // i가 홀수인 경우, 건너뛰기.
    console.log(i); // 출력 (홀수인 경우 Pass, 짝수만 출력)
}
```

## 반복문 활용
전에 함수로 작성했던 구구단을 반복문을 활용해 리팩토링을 했다.  
```js
// 반복문 활용
const gugudan = function gugudan(num){
    for(let i = 1; i < 10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
};

gugudan(2);
gugudan(4);
```

[🔗 실습 코드 보러 가기](study_js_4_while_do_for.js)