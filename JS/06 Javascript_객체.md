# 객체
(자료형 관점) 키(key)와 값(value)으로 구성된 속성들의 집합.  
{중괄호}를 사용하며, 리터럴 방식으로 객체를 생성했다고 표현한다.  
```js
const empty = {}; // 빈 객체로 생성 가능.

const person = {
    name:{
        firstName: 'ShineDay',
        lastName: 'Kim'
    },
    age: 27,
    isAdult: true,
    coding: ['python', 'javascript'],
    printinfo: function(){
        return 'Day by day, Shineday:}';
    }
};
```
객체는 자료형의 데이터를 값으로 가지며 (배열, 숫자, 논리 데이터...), 다른 객체나 함수를 포함할 수 있다.  
키는 문자열로 작성하는데, 따옴표로 표시하지 않아도 상관 없다. (단, 공백이 들어갈 경우 따옴표로 묶어줘야 한다.)  
## 객체 접근
### [대괄호] 연산자
```js
// 객체 접근 []
// 대괄호로 속성 접근
console.log(person['name']); // {firstName: 'ShineDay', lastName: 'Kim'}

// 속성 값이 객체, 그 객체의 값에 접근
console.log(person['name']['firstName']); // ShineDay

// 배열인 속성 값 접근
console.log(person['coding']); // ['python', 'javascript']

// 인덱스를 활용해 배열의 특정 위치 값 접근
console.log(person['coding'][0]); // python

// 객체 안의 함수 실행
console.log(person['printinfo']()); // Day by day, Shineday:}
```
객체명 뒤에 대괄호로 키를 넣어준다.  
이때, 키는 문자열 형태로 (' ', " ")로 감싸준 형태로 작성해야 한다.  

### . 마침표 연산자
```js
// 객체 접근 .
console.log(person.name.lastName); // Kim
console.log(person.age); // 27
console.log(person.coding[1]); // javascript
console.log(person.printinfo()); // Day by day, Shineday:}
```
대괄호로 구분하는걸 `.` 마침표로 연결시켜준다.  
대괄호로 접근할 때와는 다르게 따옴표로 감싸주지 않는다.  
공백이 포함된 키는 마침표 연산자 대신 대괄호 연산자를 사용해 접근해야 한다.  

## 객체 속성 값 변경
```js
person.name.firstName = 'marie'; // 키로 속성에 접근, 값을 재할당.
console.log(person.name); // {firstName: 'marie', lastName: 'Kim'}

// 함수
person.printinfo = function(){return '날마다, 빛날:}';}
console.log(person.printinfo()); // 날마다, 빛날:}
```
객체로 정의된 값을 바꿀 때, 키로 속성에 접근, 재할당 할 수 있다.

## 객체 속성 동적으로 추가하기
```js
person.labs = 'https://haze.mingizeok.com';
console.log(person);
```
> age: 27  
> coding: ['python', 'javascript']  
> isAdult: true  
> labs: "https://haze.mingizeok.com"  
> name: {firstName: 'marie', lastName: 'Kim'}  
> printinfo: f ()  

객체에 없는 속성일 때, 해당 키와 값으로 생성된다.  
이미 만들어진 객체에 나중에 속성을 추가하는 것을 동적으로 추가한다고 말한다.  

## 객체 속성 동적으로 삭제하기 (delete 키워드 사용)
```js
delete person.coding[1]; // delete 키워드로 삭제
console.log(person.coding); // ['python', empty]

delete person.labs;
console.log(person);
```
delete 키워드를 배열에서 사용할 때, 값은 삭제되고 빈 공간으로 남게 된다. (`empty`가 뜨는 이유)  
배열이 순서와 길이를 같이 가지고 있는데(인덱싱), delete 키워드로는 이 자리(인덱스)까지 없애지 못하기 때문이다.  
- delete는 객체에서 사용하기 위해 만들어진 키워드
- 객체는 순서를 가지고 있지 않은 이름표(키)만 붙어있는 집합이다. -> 인덱싱 X

배열의 요소를 지울 때 splice 사용하면 공간까지 지울 수 있다. (여러 방법들이 있긴 하다)  
```js
person.coding.splice(1, 1); // 1번 인덱스에서 부터 한 개를 삭제
console.log(person.coding); // ['python']
```
length도 1개로 잡힌다.
## 'splice' 실험
```js
// splice 실험
// 데이터 추가
person.coding = ['python', 'javascript', 'java', 'html', 'css', 'django', 'fastapi'];
console.log(person.coding); 
// ['python', 'javascript', 'java', 'html', 'css', 'django', 'fastapi']

person.coding.splice(2, 3);
console.log(person.coding); // ['python', 'javascript', 'django', 'fastapi']
```
데이터 추가, 7개의 데이터들이 자리를 잘 잡고 있는 것을 볼 수 있다.  
> 0: "python"  
> 1: "javascript"  
> 2: "java"  
> 3: "html"  
> 4: "css"  
> 5: "django"  
> 6: "fastapi"  
> length: 7  

`person.coding.splice(2, 3);` 인덱싱 2번 자리부터 3개의 데이터 삭제.  
-> 'java', 'html', 'css' 삭제.  
> 0: "python"  
> 1: "javascript"  
> 2: "django"  
> 3: "fastapi"  
> length: 4  

인덱스도 빈틈없이 채워졌다.
```js
delete person.coding[2];
delete person.coding[3];
delete person.coding[4];
// ['python', 'javascript', empty x 3, 'django', 'fastapi']
```
> 0: "python"  
> 1: "javascript"  
> 5: "django"  
> 6: "fastapi"  
> length: 7  

delete 키워드로 삭제하게 되면 구멍이 나는 걸 볼 수 있다.  
배열은 delete 키워드보다는 다른 방법을 사용하는 게 좋아 보인다.  

[🔗 실습 코드 보러가기](study_js_5_object.js)