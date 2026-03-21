// 조건문
// if 문

let num = 9;

if(num % 2 == 0) {
    console.log(`${num} <- 이 숫자는 짝수 입니다.`);
}else {
    console.log(`${num} <- 이 숫자는 홀수 입니다.`);
}

// 숫자 up and down
var inputNum = 5;
let answerNum = 2;

inputNum = 1;
inputNum = 2;

if(inputNum == answerNum) {
    console.log(`${inputNum} : 정답입니다!`);
}else if(inputNum > answerNum) {
    console.log(`${inputNum} : down!`);
}else {
    console.log(`${inputNum} : up!`);
}


// switch 문
let food = 'apple';

switch(food) {
    case 'melon':
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

// if문과 switch문 비교

let score = 95
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

// switch문의 예시 (by. gemini)

const userRole = 'premium';

switch (userRole) {
  case 'admin':
    console.log("관리자 페이지에 접속할 수 있습니다.");
    break;
    
  case 'premium':
    console.log("광고 없는 영상을 시청할 수 있습니다.");
    break;
    
  case 'free':
    console.log("기본 영상을 시청할 수 있습니다.");
    break;
    
  default:
    console.log("로그인이 필요한 서비스입니다.");
    break;
}
// switch문의 예시 2 (by. gemini)
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

// if문 작성 시 ...
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