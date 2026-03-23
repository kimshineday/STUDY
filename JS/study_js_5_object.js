// 객체
const empty = {}; // 빈 객체

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

// 객체 접근 []
console.log(person['name']); // 대괄호로 속성 접근
console.log(person['name']['firstName']); // 속성 값이 객체, 그 객체의 값에 접근
console.log(person['coding']); // 배열인 속성 값 접근
console.log(person['coding'][0]); // 인덱스를 활용해 배열의 특정 위치 값 접근
console.log(person['printinfo']()); // 객체 안의 함수 실행

// 객체 접근 .
console.log(person.name.lastName);
console.log(person.age);
console.log(person.coding[1]);
console.log(person.printinfo());

// 속성 값 변경
person.name.firstName = 'marie'; // 키로 속성에 접근, 값을 재할당.
console.log(person.name);

// 함수
person.printinfo = function(){return '날마다, 빛날:}';}
console.log(person.printinfo());

// 객체 속성 동적으로 추가
person.labs = 'https://haze.mingizeok.com';
console.log(person);

// 객체 속성 동적으로 삭제
// delete person.coding[1]; // delete 속성으로 삭제 -> empty
person.coding.splice(1, 1); // 1번 인덱스에서 부터 한 개를 삭제
console.log(person.coding);

delete person.labs;
console.log(person);

// splice 실험
// 데이터 추가
person.coding = ['python', 'javascript', 'java', 'html', 'css', 'django', 'fastapi'];
console.log(person.coding);

person.coding.splice(2, 3);
// delete person.coding[2];
// delete person.coding[3];
// delete person.coding[4];

console.log(person.coding);