# CSS, Cascading Style Sheet
HTML에서 속성으로 스타일 요소를 다루다 확장의 문제가 발생, 따로 독자적인 문서로 관리할 수 있게 했다.  
이때 사용하는 것이 CSS.  
## CSS 문법
```css
선택자 {속성:값;}

h1 {color: red;}
```
크게 선택자와 선언부로 구분한다.  
선택자는 스타일을 적용할 HTML 태그(요소)를 선택하는 영역,  
선언부는 선택한 태그에 적용할 스타일을 작성하는 영역이며, {중괄호}에 작성한다.  
```css
h1 {
    font-size: 24px;
    color: red;
}
```
줄 바꿈, 들여쓰기가 필수는 아니지만 가독성을 위해 하는것이 좋다.  
## 주석
```css
/* 주석 내용 */
```
HTML `<!-- -->` 주석 처리처럼 CSS에서도 주석 처리를 할 수 있다.  
CSS 주석처리 기호가 제일 이쁜거 같다.  
## CSS 적용하기
CSS 적용하는 여러가지 방법들이 있다.  
### 내부 스타일 시트 Internal Style Sheet
```html
<style>
	/* CSS 코드 */
</style>
```
HTML 내부 `<head>` 태그 안에 `<style>` 태그를 사용해 작성하는 방법이다.  
사용자에게 노출되기 전에 CSS 코드를 불러와 적용이 된다.  
HTML 문서를 해석할때마다 매번 CSS 코드를 불러와 다시 읽기에 성능 상으로는 좋지 못하다고 한다.  
```html
<body>
    <h1>CSS 적용하는 방법</h1>
    <p>
        html 문서 안에서 CSS 적용하는 방법은 두가지가 있다.<br>
        하나는 <span class="strong">인라인 스타일</span>로 html 태그에 직접적으로 style 속성으로 작성하는 방법이고,<br>
        또 다른 하나는 <span class="strong">내부 스타일 시트</span>를 사용하는 방법으로<br>
        주로 head단에 style 태그로 CSS 작성한다.
    </p>
    <p>
        또 다른 방법으로는 따로 외부에 CSS 파일을 만들어 사용하는 방법이 있다.
    </p>
</body>
```
🔺 CSS 적용 실습을 위해 <body> 작성
```html
<head>
    <style>
        body {
            font-family: 'GangwonEducationModuche'; /* 폰트 지정 */
        }
        h1 {
            font-size: 30px; /* 폰트 크기 지정 */
        }
        p {
            font-size: 20px; 
        }
        .strong {
            font-size: 24px;
            color: red; /* 폰트 색상 지정 */
        }
    </style>
</head>
```
🔺 `<style>` 태그를 사용해 CSS 코드를 작성했다.  

### 인라인 스타일 Inline Style
```html
<태그 style="CSS 코드"></태그>
```
HTML 태그에서 사용할 수 있는 style 속성에서 CSS 코드 작성하는 방식이다.  
태그 자체에 직접 적용 시키는 방법이라 CSS에서 선택자 작성은 생략이 된다.  
```html
<h1 style="color:red; font-size:24px">인라인 스타일</h1>
```
위에서 작성한 html 문서를 인라인 스타일로 적용을 시켰다.  
```html
<body style="font-family: 'GangwonEducationModuche';">
    <h1 style="font-size: 30px;">CSS 적용하는 방법</h1>
    <p style="font-size: 20px;">
        html 문서 안에서 CSS 적용하는 방법은 두가지가 있다.<br>
        하나는 <span style="font-size: 24px; color: yellowgreen;">인라인 스타일</span>로 html 태그에 직접적으로 style 속성으로 작성하는 방법이고, <br>
        또 다른 하나는 <span style="font-size: 24px; color: yellowgreen;">내부 스타일 시트</span>를 사용하는 방법으로<br>
        주로 head단에 style 태그로 CSS 작성한다.
    </p>
    <p style="font-size: 20px;">
        또 다른 방법으로는 따로 외부에 CSS 파일을 만들어 사용하는 방법이 있다.
    </p>
</body>
```
내용이 같아 강조 글씨의 색상을 바꿔봤다.  

### 외부 스타일 시트 External Style Sheet
```html
<link rel="stylesheet" href="css 파일경로">
```
CSS 코드를 HTML 안에 작성이 아닌 따로 css 파일을 만들어 작성, HTML에 연결을 시키는 방법이다.  
html에 연결 할때 `<link>` 태그를 사용해준다.  
'rel'속성으로 스타일시트임을 알려주고, 'href'속성으로는 파일 경로를 지정해 연결한다.  
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS</title>
    <link rel="stylesheet" href="style.css"> <!-- css 파일 연결 -->
</head>
<body>
    <h1>CSS 적용하는 방법</h1>
    <p>
        html 문서 안에서 CSS 적용하는 방법은 두가지가 있다.<br>
        하나는 <span class="strong">인라인 스타일</span>로 html 태그에 직접적으로 style 속성으로 작성하는 방법이고, <br>
        또 다른 하나는 <span class="strong">내부 스타일 시트</span>를 사용하는 방법으로<br>
        주로 head단에 style 태그로 CSS 작성한다.
    </p>
    <p>
        또 다른 방법으로는 따로 외부에 CSS 파일을 만들어 사용하는 방법이 있다.
    </p>
</body>
</html>
```
html 문서에서는 `<head>`에서 `<link>`태그로 css 파일 연결.  
```css
/* 웹 폰트 사용 */
@font-face {
    font-family: 'GangwonEducationModuche';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff') format('woff');
    font-weight: 300;
    font-display: swap;
}

body {
    font-family: 'GangwonEducationModuche'; /* 폰트 지정 */
}
h1 {
    font-size: 30px; /* 폰트 크기 지정 */
}
p {
    font-size: 20px;
}
.strong {
    font-size: 24px;
    color: skyblue; /* 폰트 색상 지정 */
}
```
`style.css` 파일을 만들어 내부 스타일 시트에 작성했던 CSS 코드들을 옮겨왔다.  
물론 텍스트 강조하는 색상은 또 바꿨다.  

색상 명으로 작성을 했지만 색상 코드로도 지정해줄 수 있다.
