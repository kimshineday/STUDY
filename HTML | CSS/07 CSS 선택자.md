# CSS 선택자 다루기
CSS를 적용할 태그(요소)를 지정하는 방법.  
## 기본 선택자
### 전체 선택자
```css
* /* 전체 선택자 지정 */

* { /* CSS 코드 */ }
```
HTML에서 사용하는 모든 요소들을 한번에 지정하는 방법이다.  
```css
/* 웹 폰트 불러오기 */
@font-face {
    font-family: 'NostalgicGellyRoll';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2601-1@1.0/Griun_Gellyroll-Rg.woff2') format('woff2');
    font-weight: normal;
    font-display: swap;
}

* {
    font-family: 'NostalgicGellyRoll';
}
```
`<body>` 태그 뿐만이 아닌 모든 태그들이 선택된다.  
웹 폰트를 불러와 폰트를 바꿨다.  

### 태그 선택자
```css
태그명 {/* CSS 코드 */}
```
HTML 태그 기준으로 선택하는 방법이다.  
```css
p {
    color: #939393;
}
```
모든 `<p>` 태그들의 폰트 색상을 `#939393`으로 지정한다. (밝은 회색)  
### 아이디 선택자
```css
#id속성값 {/* CSS 코드 */}
```
id 속성 값으로 선택자를 지정하는 방법.  
하나의 HTML 문서에서 고유한 값, 단독으로만 쓰여야 한다.  
-> 한번 사용했으면 해당 문서에서는 다시 지정할 수 없다.  
```css
/*
<h1 id="title">CSS 적용하는 방법</h1>
*/

#title {
    font-family: 'NostalgicMongtori';
}
```
'title'이라는 id 값을 가진 요소의 폰트를 변경한다.  
### 클래스 선택자
```css
.class속성값 { /* CSS 선택자 */ }
```
실무에서 가장 많이 사용하는 선택자 지정 방법. class 속성 값을 사용해 선택자를 지정한다.  
id 속성과는 다르게 속성 값을 중복해서 사용이 가능하다.  
```css
.category {
    font-family: 'NostalgicMongtori';
}

.strong {
    font-size: 1.2em;
    color: #45803c;
}
```
제목에 지정한 폰트를 'category' 클래스를 만들어 다른 `<hn>`태그들에도 적용.  
강조하기 위해 'strong' 클래스를 사용해 폰트 색상과 크기를 지정했다.  
### 기본 속성 선택자
```css
[속성] {/* CSS 코드 */}
[속성="값"] {/* CSS 코드 */}
```
HTML 태그에서 사용하는 속성과 값을 사용해 선택자를 지정하는 방법.  
속성과 함께 속성 값도 같이 지정할 수 있다.  
위의 태그 선택자, 아이디 선택자, 클래스 선택자에서도 이 방식을 활용해 속성값을 함께 지정해서 사용할 수는 있다.  
```css
/*
<a href="test.html">html에 대한 문서</a><br>
<a href="CSS_externalStyleSheet.html">CSS 적용 방법에 관한 문서</a><br>
<img src="#" alt="이미지없음">
*/

[href] {
    text-decoration: none; /* 링크 밑줄 삭제 */
    color: #d34c26;
}

img[alt="이미지없음"] {
    color: red;
}
```
링크 밑줄을 'text-decoration' 설정으로 지울 수 있다.  
크롬 브라우저에서 `<a>` 태그 색상 지정이 풀리는데, 아래 가상 클래스 선택자에서 알 수 있다. (LVHA 규칙)  
### 문자열 속성 선택자
```css
[속성~=문자열] /* 속성 값에 문자열이 포함되어 있을 경우 (단어 기준) */
[속성|=문자열] /* 문자열과 같거나 '문자열-'으로 시작할 경우 */
[속성^=문자열] /* 속성 값이 문자열로 시작할 경우 */
[속성$=문자열] /* 속성 값이 문자열로 끝날 경우 */
[속성*=문자열] /* 문자열이 포함되면 선택 (전체 값 기준) */
```
태그가 가진 속성 값이 특정 문자열과 일치하는 요소를 선택자로 지정하는 방법.  
많이 사용되지는 않는다.  
Mdn 사이트에서 좀 더 자세한 내용들을 확인할 수 있다.  
```css
/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}
```
사이트에서 가져온 예시인데 이런건 한번 사용해봐야 알듯 하다.  
## 조합 선택자
기본 선택자와 함께 사용해 선택자 의미를 좀 더 확장 시켜 사용한다.  
### 그룹 선택자
```css
선택자1, 선택자2, 선택자n {/* CSS 코드 */}
```
여러 선택자를 하나로 그룹 지을 때 사용한다.  
선택자끼리의 구분은 `, `을 사용한다.  
```css
.strong, h3 {
    color: #45803c;
}
```
강조할때 사용했던 색상을 `<h3>`태그로 작성한 소제목에 함께 적용을 시켜보았다.  
### 자식 선택자
```css
부모선택자 > 자식선택자 {/* CSS 코드 */}
```
부모 요소의 하위에 있는 자식 요소에 스타일 적용할 때 사용한다.  
```html
<div class="child">
    <p>
        부모 요소의 하위에 있는 자식 요소에 스타일 적용할 때 사용한다.
    </p>
    부모 선택자 안에 있는 해당 자식 선택자들을 선택해 적용할 수 있다.
</div>
```
```css
.child > p {
    font-family: 'NostalgicMongtori';
}
```
그냥 작성한 글과 태그 안에 있는 글의 차이점이 명확하다.  
### 하위 선택자
```css
선택자1 선택자2 선택자n {/* CSS 코드 */}
```
자식 선택자와 비슷한 개념이지만 좀 더 확장된 선택자라고 볼 수 있다.  
하위 선택자는 자식 선택자보다 더 하위에 있는 선택자들을 선택할 수 있다.  
```html
<div class="descendant">
    <p>
        자식 선택자와 비슷한 개념이지만 좀 더 확장된 선택자라고 볼 수 있다.<br>
        하위 선택자는 자식 선택자보다 <span>더 하위에 있는 선택자들</span>을 선택할 수 있다.
    </p>
</div
```
```css
/* 자식 선택자로는 지정이 안된다. */
.descendant > span {
    font-family: 'NostalgicMongtori';
    color: #d34c26;
}

/* 하위 선택자로 지정해야 적용이 된다. */
.descendant span {
    font-family: 'NostalgicMongtori';
    color: #d34c26;
}
```
### 인접 형제 선택자
```css
이전선택자 + 대상선택자 {/* CSS 코드 */}
```
이전 선택자 요소 바로 다음에 있는 대상 선택자 요소를 지정한다.  
```html
<h3 class="category adjacent">인접 형제 선택자</h3>
<p>
    이전 선택자 요소 바로 다음에 있는 대상 선택자 요소를 지정한다.
</p>
<p>
    그 다음 요소는 선택이 되지 않는다.
</p>
```
```css
.adjacent + p {
    color: black;
}
```
'adjacent' 클래스 다음에 오는 `<p>` 태그만 적용, 그 뒤에 있는 `<p>`태그에는 적용이 되지 않는걸 볼 수 있다.  
'+' 뒤에 오는 요소만 해당된다.  
### 일반 형제 선택자
```css
이전선택자 ~ 대상선택자 {/* CSS 코드 */}
```
이전 선택자 뒤에 오는 모든 형제 관계의 대상 선택자를 지정한다.  
```html
<h3 class="category general">일반 형제 선택자</h3>
<p>
    이전 선택자 뒤에 오는 모든 형제 관계의 대상 선택자를 지정한다.
</p>
<p>
    여기서는 이 태그까지 선택이 된다.
</p>
```
```css
.general ~ p {
    color: black;
}
```
인접 형제 선택자보다 해당되는 형제 요소들 모두에 적용이 된다.  
```html
<p>
    <span class="general"> span으로 다시 적용 시켜보았다.</span><br>
    이전 선택자 뒤에 오는 <span>모든 형제 관계의 대상 선택자</span>를 지정한다.<br>
    무슨 <span>말</span>, 아무 <span>말</span>, 올해는 붉은<span>말</span>의 해.
</p>

<!-- br도 형제 요소여서 이렇게 지정해도 적용이 된다 ㅋㅋㅋㅋ -->
<p>
    span으로 다시 적용 시켜보았다.<br class="general">
    이전 선택자 뒤에 오는 <span>모든 형제 관계의 대상 선택자</span>를 지정한다.<br>
    무슨 <span>말</span>, 아무 <span>말</span>, 올해는 붉은<span>말</span>의 해.
</p>
```
```css
.general ~ span {
    color: #d34c26;
}
```
## 가상 요소 선택자 사용하기
```css
기준선택자::가상요소선택자 {/* CSS 코드 */}
```
HTML에 명시된 구성 요소는 아니지만 존재하는 것으로 취급해 선택자를 지정하는 방법.  
기준 선택자를 생략할 경우 전체 선택자 `*`가 들어간 것으로 적용이 된다.  
여러 가상 요소 선택자들이 있지만 자주 사용하는 두가지가 있다.  
```css
::before {/* 콘텐츠 앞의 공간을 선택 */}
::after {/* 콘텐츠 뒤의 공간을 선택 */}
```
```html
<p class="Pseudo"><br>기준 선택자를 생략할 경우 전체 선택자 `*`가 들어간 것으로 적용이 된다.<br></p>
```
```css
.Pseudo::before {
    content: 'HTML에 명시된 구성 요소는 아니지만 존재하는 것으로 취급해 선택자를 지정하는 방법.';
}

.Pseudo::after {
    content: '여러 가상 요소 선택자들이 있지만 자주 사용하는 두가지가 있다.';
}
```
CSS에서 콘텐츠 속성으로 앞 뒤로 문장들을 추가했다.  
## 가상 클래스 선택자 사용하기
```css
기준요소:가상클래스선택자 {/* CSS 코드 */}
```
요소 상태를 이용해 선택자를 지정한다.  
가상 클래스 선택자도 가상요소 선택자와 같이 많은 종류들이 있다.  
이 역시 사이트에서 한번 보는게 좋을듯 하다.  
공부하는 책에도 여러가지 소개가 되어있지만 나중에 한번 사용을 해볼때 따로 정리 예정이다.  
### 링크 가상 클래스 선택자
```css
:link /* 한 번도 방문하지 않은 링크 */
:visited /* 한 번이라도 방문한 적이 있는 링크*/
```
위에 `<a>`태그 CSS 적용한게 크롬에서 적용이 풀리는 현상이 있었는데, (LVHA 규칙이 있다고 함)  
링크를 방문을 했을 경우 가상의 클래스 'visited'가 부여 되면서 링크 CSS 설정이 풀리게 된거였다.  
사파리에서는 잘 적용이 되어있는걸 보면 이 역시 브라우저마다 차이를 가지고 있는듯 하고,  
안전하게 가상 클래스 활용해 작성하면 설정 값이 유지가 되니 이를 사용해 다시 적용을 했다.  
```css
a:link {
    color: #d34c26;
}

a:visited {
    color: #d34c26;
}
```
이렇게 같은 색상을 지정하면 접속했다가 다시 돌아왔을 경우에도 같은 색상으로 유지가 된다.  
```html
<a href="test.html">html에 대한 문서</a><br>
<a href="CSS_externalStyleSheet.html" class="link-visited">CSS 적용 방법에 관한 문서</a><br>
```
```css
.link-visited:visited {
    color: #45803c;
}
```
클래스를 부여해 따로 적용을 시켜보았다.  
CSS 적용 문서만 방문후에 초록색 글씨로 변경된다.  
### 동적 가상 클래스 선택자
```css
:hover /* 요소에 마우스 올리는 동작 */
:active /* 요소를 마우스 클릭하고 있는 동안 */
```
어떤 행동에 따라 동적으로 변하는 상태를 클래스로 지정하는 방법이다.  
대표적인 두가지 상태 'hover', 'active'가 있다.  
```css
a:hover {
    color: aquamarine;
}
```
눈 부신 색상으로 설정.  
마우스를 올리고 있으면 지정한 색상으로 출력이 된다.  
티스토리 플러그인 기능들 중 '무지개 링크' 기능도 아마도 이를 활용하지 않았을까.. 하는 그런 생각.  
궁금해서 gemini로 만들어보았다.  

#### 번외, 알록달록 hover CSS
##### 티스토리 무지개 링크랑 비슷한 느낌
```css
/* 1. 애니메이션 시나리오 정의 */
@keyframes rainbow-move {
  0% { color: #ff0000; }    /* 빨강 */
  25% { color: #ffff00; }   /* 노랑 */
  50% { color: #00ff00; }   /* 초록 */
  75% { color: #0000ff; }   /* 파랑 */
  100% { color: #ff0000; }  /* 다시 빨강 (끊김 없는 반복을 위해) */
}

/* 2. hover 시 애니메이션 연결 */
a:hover {
  /* 이름: rainbow-move, 시간: 2초, 반복: 무한, 속도: 일정하게 */
  animation: rainbow-move 2s infinite linear;
}
```
##### 화려 그 자체
```css
a:hover {
    background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
    -webkit-background-clip: text; /* 배경을 글자 모양으로 자름 */
    -webkit-text-fill-color: transparent; /* 글자 내부를 투명하게 해서 배경이 보이게 함 */
    background-size: 200% auto;
    animation: gradient-slide 1.5s linear infinite;
}

@keyframes gradient-slide {
    from { background-position: 0% center; }
    to { background-position: 200% center; }
}
```
## 다양한 선택자 조합하기
선택자를 조합해서 사용할 수 있다.  
```html
<h3 class="category general">일반 형제 선택자</h3>
<p class="gen">
    이전 선택자 뒤에 오는 모든 형제 관계의 대상 선택자를 지정한다.
</p>
<p class="gen">
    여기서는 이 태그까지 선택이 된다.
</p>
```
```css
.general ~ p.gen { /* .gen 클래스를 가지고 있는 p태그만 */
    color: black;
}

.general ~ span {
    color: #d34c26;
}
```
일반 형제 선택자에서 적용했던 CSS 코드.  
따로 div로 묶어주지 않으면 이후에 작성한 `<p>` 태그의 내용들이 기존의 회색 글씨가 아닌 검은색 글씨로 적용이 된다.  
이를 해결하기 위해 두 `<p>`태그를 클래스로 지정, CSS에서 `p.gen`으로 지정하면 div로 묶지 않아도 저 부분만 지정할 수 있다.  
사이에 공백을 넣으면 하위 선택자로 인식이 되니, 꼭 붙여서 작성해야한다.  
