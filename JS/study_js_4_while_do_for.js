// 반복문
// while 문
let count = 1; // 카운트 변수 초기화

while(count <=9999){ // 카운트 숫자가 9999 이하일때 실행
    console.log(count); // 숫자 출력
    count++; // 카운트 숫자 증가
}

// do...while 문
let count2 = 1;

do{
    console.log(count2);
    count2++;
}while(count2 <= 10);

// 비교
while(false){
    console.log('거짓으로 판단, 출력 X');
}

do{
    console.log('무조건 한번은 실행');
}while(false);

// for 문
for(let i = 10; i >= 0; i--){ // i = 10, i가 0 이상이면 블록문 실행, 1씩 감소
    if(i==0){
        console.log('0, 땡!'); // i가 0일 경우 실행
    }else{
        console.log(i); // i가 0이 아닐 경우 실행
    }
}

// 배열
let arr = ['banana', 'apple', 'orange'];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// length 속성
let str = '글자수 확인 가능';

console.log(str.length);

// for...in 문
// 배열
for(let index in arr){ // 가변수에는 인덱스 값(문자열 형식으로 담김)으로 담아낸다.
    console.log(arr[index]);
}

// 객체 리터럴
let obj = {'name': '철수', 'age': '20'};

for(let key in obj){ // 가변수에 객체 리터럴의 key가 할당된다.
    console.log(`${key} : ${obj[key]}`)
}

// break 문
for(let i = 0; i < 10; i++){
	console.log(i);
    if(i === 5) break;
}

// continue 문
for(let i = 1; i <= 10; i++){ // i가 10 이하일 때
    if(i % 2 === 1) continue; // i가 홀수인 경우, 건너뛰기.
    console.log(i); // 출력 (홀수인 경우 Pass, 짝수만 출력)
}


// 반복문 활용
const gugudan = function gugudan(num){
    for(let i = 1; i < 10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
};

gugudan(2);
gugudan(4);