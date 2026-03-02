# HTML의 기본 구성 요소
### 태그
다양한 구성 요소를 정의. (텍스트, 이미지, 버튼 등 ...)  
HTML 문법을 이루는 가장 작은 단위.
```html
<태그>
```
태그는 `< >` 괄호를 사용한다.

### 속성
태그에 기능을 보충하는 역할. (옵션 부여) 하나의 태그에 여러개의 속성을 사용할 수 있다.
```html
<태그 속성명="속성값">
```
'속성 명'과 '속성 값'으로 구성, 속성값은 `" "`으로 들어간다.  
속성 값이 여러개인 경우, "큰따옴표" 안에 쉼표로 구분해 나열한다.

## 문법

크게 콘텐츠가 있는 문법과 없는 문법으로 나뉜다. (안에 들어가는 내용의 유무로 구분)  
### 콘텐츠가 있는 경우
```html
<title>My First Web Page!</title>
```
<시작태그>content</종료태그> => 요소 element  
콘텐츠 앞, 뒤에 시작 태그(open tag)와 종료 태그(close tag)로 감싸준다.  
시작, 종료 태그와 콘텐츠까지 합쳐 요소라고 한다.
### 콘텐츠가 없는 경우
```html
<br>

<br/>
```
내용이 비어 있다는 의미로 빈 태그(empty tag)라고도 불린다.  
감싸줄 내용이 없기 때문에 시작 태그과 곧 요소다.

이전 HTML에서는 태그 명 뒤에 `/`를 넣어줘야했었지만, HTML5부터는 따로 표시 없이 사용 가능하다.

## 주석
코드 자체에 직접적으로 영향을 주지 않고 메모 (설명)할 때 사용.
```html
<!-- 주석 내용 입력 -->

<!-- 떡볶이 먹고 싶다 -->
 ```
기호로 만들어진 화살표 사이에 내용을 넣으면 된다.  
웹 브라우저의 소스 보기로 볼 수 있기 때문에 중요한 내용을 넣으면 안된다.

개발자 도구로 볼 수 있다.

## HTML의 기본 구조
```html
<!DOCTYPE html> <!-- DTD: 문서형 정의 -->
<html lang="ko"> <!-- html 문서 시작 -->
	<head>
    	<!-- 문서 정보 정의 -->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML 공부 중</title>
    </head>
    <body>
    	<!-- 웹 브라우저에 표시할 내용 -->
    </body>
</html> <!-- html 문서 끝 -->
```
### DTD, Document Type Definition 문서형 정의
웹 브라우저가 어떻게 처리를 해야하는지 명시해준다. `<!DOCTYPE html>`  
html 문서 작성 시 처음에 작성한다.

### 태그
`<html>`  
HTML 문서의 시작과 끝을 의미, 이 태그 안에 작성해야 한다.
`<head>`  
HTML 문서의 메타데이터(metadata) 정의.  
웹 브라우저에는 노출이 되지 않는다.  
`<meta>`  
HTML 문서에 대한 정보를 작성한다. (ex. `meta`, `title`, `link`, `style`, `script` 등)
```html
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HTML 공부 중</title>
```
- charset  
HTML 문서에서 허용하는 문자 집합(charset)을 정의.  
과거엔 EUC-KR 사용, 더 많은 언어를 허용하기 위해 UTF-8 사용한다.
- http-equiv  
인터넷 익스플로러(IE) 렌더링 엔진을 지정.  
위의 코드는 최신 버전으로 지정하고 있다.
- name  
기기의 화면 너비에 맞추기 위해 사용.  
viewport : 사용자에게 보이는 화면 영역.  

`<title>`  
HTML 문서 제목 지정.  
반드시 한 개의 title 태그를 사용해 제목을 지정해야한다. 문서마다 제목은 중복을 피하는게 좋다.  
(검색 엔진 사이트에서 html 문서 찾을 때 title 태그에 작성된 제목으로 찾기에 중복된 문서가 여러 개 발견 시 신뢰성 떨어진다는 판단,  
검색 엔진 노출 시 불이익이 있을 수 있다.)  
`<body>`  
웹 브라우저에 노출되는 내용을 작성.  
웹 브라우저에 표시되는 모든 내용을 이 태그 안에 작성해야 한다.

## HTML 특징
### 블록 요소와 인라인 요소
**블록 요소**
`<h1>` `<h2>`..., `<p>` 등 ... 사용할 때 줄 바꿈 되는 태그들.  
**인라인 요소**  
`<a>`, `<span>` 등... 공간이 부족할 때 줄 바꿈 되는 태그들.  
따로 줄 바꿈 태그를 사용하지 않으면 한줄에 출력된다.  

### 부모, 자식, 형제 관계
태그들의 관계를 나타낸다.
```html
<html> <!-- 부모 -->
    <head></head> <!-- 자식 1 -->
    <body></body> <!-- 자식 2 -->
    
    <!-- head, body는 형제 관계 -->
</html>
```
태그 안에 같은 선상에 있는 태그들은 형제 관계, 상위 태그는 하위 태그와 부모 - 자식 관계가 성립 된다.

### 줄 바꿈과 들여쓰기
코드의 가독성을 위해 암묵적으로 지키는 규칙.
```html
<!-- 그냥 나열하면 가독성이 좋지 않다. -->
<!DOCTYPE html><html lang="ko"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>HTML 공부 중</title></head><body>가독성은 중요하다</body></html>
<!-- 놀랍게도 실행이 된다. -->

<!-- 줄 바꿈과 들여쓰기를 사용해 가독성을 높이자. -->
<!DOCTYPE html>
<html lang="ko">
	<head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML 공부 중</title>
    </head>
    <body>
    	가독성은 중요하다
    </body>
</html>
```