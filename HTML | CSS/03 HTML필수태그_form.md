# 실무에서 자주 사용하는 HTML 필수 태그
## 폼 구성하기

폼 form은 사용자와 상호작용해서 입력 받고 서버로 전송할때 쓰인다.  
예를 들어 로그인 페이지, 설문 조사 등 .. 여러가지가 있다.  
### `<form>` 태그
```html
<form action="서버 URL" method="get 또는 post"></form>
```
`<form>` 태그는 'action'과 'method' 속성을 함께 사용한다.  
'action'에는 입력 받은 값들을 전송할 서버 URL 주소를, 'method'에 송신 방식 get, post를 지정할 수 있다.  
### `<input>` 태그
입력 받는 요소를 생성할 때 사용.  
```html
<input type="종류" name="이름" value="초기 값">
```
'type'속성은 필수로 사용, 'name'과 'value' 속성들은 선택해서 사용 가능하다.

#### type 속성 : 다양한 입력 요소들.  
> text : 한 줄 텍스트  
> password : 비밀번호
> tel : 전화번호  
> number : 숫자만 입력  
> url : URL 주소  
> search : 검색용 텍스트  
> email : 이메일  
> checkbox : 체크 박스  
> radio : 라디오 버튼  
> file : 파일 업로드  
> button : 버튼  
> image : 이미지  
> hidden : 사용자 눈에 보이지 않는 입력 요소  
> date : 날짜 선택 입력  
> datetime-local : 사용자 시간대에 맞는 날짜 선택  
> month : 날짜 (연도, 월) 선택  
> week : 날짜 (연도, 주차) 선택  
> time : 시간 선택  
> range : 숫자 범위 선택 (슬라이드)  
> color : 색상 선택  
> submit : 폼 전송 역할 버튼  
> reset : 폼 요소에 입력한 값 초기화  

#### name 속성
`<form>` 태그로 서버에 전송 할 때 'name' 속성에 적힌 값이 이름으로 지정된다.  
서버에서 지정된 이름으로 입력요소 식별 가능하다.  

#### value 속성
보통 사용자에게 입력 값을 받지만 초기값을 설정해야하는 경우에 사용.  

### `<label>` 태그
`<form>` 태그 안에서 사용하는 상호작용 요소에 이름을 붙일 때 사용.  
웹 접근성을 위해 사용하는게 좋다.  

#### 암묵적인 방법
```html
<label>
    ID
    <input type="text">
</label>
```
`<label>` 태그 안에 `<input>` 태그를 포함하는 방법  

#### 명시적인 방법
```html
<label for="userid">ID</label>
<input type="text" id="userid">
```
태그 속 태그로 포함 시키지 않고 `<label>`의 'for' 속성과 `<input>`의 'id'속성으로 연결한다.  
#### 함께 사용  
```html
<label for="userid">
    <input type="text" id="userid">ID
<label>
```
> 잘 사용이 되지는 않는 듯 하다.
### `<fieldset>` `<legend>` 태그
그룹을 묶을때 사용하면 박스 모양의 테두리가 생성된다.  
```html
<form action="#">
    <fieldset>
        <legend>그룹 이름</legend>
        /// 상호작용 요소 ///
    </fieldset>
</form>
```
`<fieldset>` 태그는 박스로 묶어주는 역할을 한다.  
`<legend>` 태그를 사용해 그룹 이름을 넣어줄 수 있다.  
```html
<form action="#">
    <fieldset>
        <legend>기본 정보</legend>
        <p>
            <label for="userid">ID</label>
            <input type="text" id="userid">
        </p>
        <p>
            <label for="pw">Password</label>
            <input type="password" id="pw">
        </p>
    </fieldset>
    <fieldset>
        <legend>선택 정보</legend>
        <p>
            <label for="age">나이</label>
            <input type="number" id="age"></input>
        </p>
        <p>
            <label for="recommender">추천인</label>
        </p>
            <input type="text" id="recommender">
    </fieldset>
</form>
```
이렇게 깔끔하게 그룹을 묶어줄 수 있다.
### `<textarea>` 태그
```html
<textarea>초기 값</textarea>
```
여러 줄의 입력 요소를 생성할 때 사용하는 태그.  
`<input>` 태그와는 다르게 닫는 태그를 사용한다.  
초기 값을 설정할 때 옵션으로 지정하는 대신 콘텐츠를 입력하는 부분에 작성하면 된다.  
지금 쓰고 있는 블로그 포스팅 화면도 textarea로 이루어져있다.  
```html
<form action="#" method="post"> <!-- 글 작성하는 form 양식이므로 post -->
    <fieldset>
        <legend>블로그 글쓰기</legend>
        <p>
            <label for="title">제목</label>
            <input type="text" id="title">
        </p>
        <p>
            <label for="desc">내용</label>
            <textarea id="desc" name="desc"></textarea>
        </p>
    </fieldset>
</form>
```
입력창도 넓직하게 생성된다.

### `<select>` `<option>` `<optgroup>` 태그 : 콤보 박스
카테고리를 선택할 수 있는 콤보 박스를 만들 수 있다.
```html
<select>
    <optgroup label="그룹 이름">
        <option>웹 브라우저에 표시할 값</option>
    </optgroup>
</select>

<!-- 예시 -->
<select name="city" id="city">
    <option value="강북구">강북구</option>
    <option value="강남구">강남구</option>
    <option value="서초구">서초구</option>
    <option value="중원구">중원구</option>
    <option value="분당구">분당구</option>
</select>
```
`<select>` 태그로 콤보 박스 형태로 묶어주고, `<option>` 태그로 표시할 항목들을 넣어준다.  
`<option>` 태그에 'value'속성을 지정을 해줄 수 있다.  
기본 값으로는 `<option>` 태그에 적혀있는 콘텐츠가 값으로 전송된다.  

`<optgroup>` 태그로 항목들을 중간 카테고리 개념으로 묶어줄 수 있다.  
항목들을 이 태그로 묶어줄때 'label' 속성으로 그룹명을 지정해주어야 한다.  
```html
<select name="food" id="food">
    <optgroup label="떡볶이">
        <option value="차돌떡볶이">차돌떡볶이</option>
        <option value="짜장떡볶이">짜장떡볶이</option>
        <option value="카레떡볶이">카레떡볶이</option>
        <option value="매운떡볶이">매운떡볶이</option>    
    </optgroup>
    <optgroup label="튀김">
        <option value="오징어튀김">오징어튀김</option>
        <option value="김말이튀김">김말이</option>
        <option value="야채튀김">야채튀김</option>
        <option value="고구마튀김">고구마튀김</option>
    </optgroup>
</select>
```
이렇게 깔끔하게 항목들을 정리할 수 있다.  
#### size 속성
콤보 박스 항목들의 노출 개수를 지정하는 속성.  
숫자로 지정할 수 있으며 기본 값은 1개다.  

```html
<select name="food" id="food" size="5">
```
  
#### multiple 속성
```html
<select name="food" id="food" size="5" multiple>
```
항목들을 여러개 선택할 수 있는 속성. 따로 속성 값은 들어가지 않는다.  
항목 하나 선택 후, cmd키 누르고 클릭하면 이중으로 선택할 수 있게끔 된다. (윈도우는 ctrl)  

#### selected 속성
```html
<select name="city" id="city">
    <option value="강북구">강북구</option>
    <option value="강남구">강남구</option>
    <option value="서초구" selected>서초구</option> <!-- selected -->
    <option value="중원구">중원구</option>
    <option value="분당구">분당구</option>
</select>
```
콤보박스는 따로 지정하지 않으면 첫 번째 옵션이 자동으로 뜬다.  
그 보여지는 값을 따로 지정해줄 수 있다.  

처음 뜨는 기본 값이 지정한 값으로 변경되었다.  
'selected'속성이 여러 항목에 지정되어있는 경우 마지막으로 지정된 값이 출력된다.  

### `<button>` 태그
```html
<button type="종류">버튼 내용</button>
```
`<input>`에서 'type'으로 지정해 버튼을 생성할 수 있지만 `<button>` 태그로도 생성할 수 있다.
#### `<button>` type 속성
- submit : 폼을 서버에 전송할 때
- reset : 입력한 내용 삭제 (초기화)
- button : 그냥 버튼..?
```html
<button type="submit">이 버튼을 누르면 제출 할 수 있다.</button>
```

`<input>`태그로 만든 버튼과 `<button>` 태그로 만든 버튼.  
버튼을 채워넣느냐, 넣지 못하느냐의 차이가 있다.  
`<button>`태그는 닫는 태그가 있기 때문에 안에 콘텐츠를 직접 작성해 채워넣을 수 있다.  

### `<form>` 관련 태그에서 사용할 수 있는 속성
#### 'disabled' 속성
```html
<태그 disabled>
```
상호작용 요소를 비활성화하는 속성.
`<input>` `<textarea>` `<select>` `<button>` 에서 사용할 수 있다.  
#### 'readonly' 속성
```html
<태그 readonly>
```
상호작용 요소를 읽기 전용으로 변경할 때 사용.  
입력은 못하지만 요소를 선택, 드래그해서 내용 복사 가능하다.  
특정 속성 값을 가지고 있는 `<input>` 태그, `<textarea>`태그에서만 사용 가능하다.  

> `<input>` 태그에서 사용 가능할 때 : type이 아래인 경우만 사용 가능하다.
> text  
> search  
> tel  
> url  
> email  
> password  
> date  
> month  
> week  
> time  
> datetime-local  
> number  

#### 'maxlength' 속성
```html
<태그 maxlength="숫자">
```
입력할 수 있는 글자 수 제한을 걸 수 있다.  
'readonly' 속성처럼 특정 속성값을 가지고 있는 `<input>`, `<textarea>`에서만 사용 가능하다.  
사용 가능한 type 속성 값은 'readonly'와 같다.  
#### 'checked' 속성
```html
<태그 checked>
```
'selected' 속성과 비슷한 느낌이다. 체크 폼에서 선택된 상태로 만들어주는 속성이다.  
`<input>` type에서 'checkbox' 'radio'에서만 사용할 수 있다.  
#### 'placeholder 속성'
```html
<input placeholder="입력 값에 대한 힌트">
```
입력칸에 속성 값에 작성한 텍스트가 출력된다. 어떤 정보를 입력해야하는지 힌트로 사용한다.
