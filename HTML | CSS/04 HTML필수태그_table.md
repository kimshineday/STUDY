# 실무에서 자주 사용하는 HTML 필수 태그
## 표 만들기
표 관련 용어 : → 행(가로) ↓ 열(세로) ☐ 셀 (칸)
```html
<table> <!-- 표 생성 -->
    <caption>표 제목</caption>
    <tr> <!-- 행 생성 : 첫 번째 행--> 
    	<th>항목 이름 1</th>
    	<th>항목 이름 2</th>        
    	<th>항목 이름 3</th>
    </tr>
    <tr> <!-- 행 생성 : 두 번째 행, 여기서부터 데이터 -->
    	<td>첫 번째 항목 값</td>
    	<td>두 번째 항목 값</td>        
    	<td>세 번째 항목 값</td>
    </tr>
</table>
```
HTML에서 표를 구성할 때 5가지의 태그들을 사용해서 작성한다.  
표를 작성할때는 행 기준으로 입력하게 된다.  
`<table>` : 표 생성할 때 사용하는 태그  
`<caption>` : 표 제목, <table> 태그에서 첫 번째로 작성해야 하는 태그.  
`<tr>` : table row 행 생성 태그  
`<th>` : table header 제목, 항목 이름  
`<td>` : table data 내용, 항목 값  
```html
<table> <!--표 생성 -->
	<caption>음식</caption> <!-- 표 제목 : 첫 번째로 작성 -->
    <tr> <!-- 행 생성 -->
        <!-- 제목 -->
        <th>번호</th>
        <th>카테고리</th>
        <th>음식</th>
    </tr>
    <tr> <!-- 행 생성, 내용 관련 -->
        <td>1</td> <!-- 번호 -->
        <td>한식</td> <!-- 카테고리 -->
        <td>된장찌개</td> <!-- 음식 -->
    </tr>
    <tr> 
        <td>2</td> 
        <td>한식</td> 
        <td>김치찌개</td> 
    </tr>
    <tr> 
        <td>3</td> 
        <td>일식</td> 
        <td>규카츠</td> 
    </tr>
    <tr> 
        <td>4</td> 
        <td>중식</td> 
        <td>마라탕</td>
    </tr>
</table>
```
출력 결과를 보면 선이 나와있지 않아 명확한 표를 볼 수 없다.  
책에서는 CSS 효과를 적용해서 예시를 담아주었는데, html에서 해결할 수 있는 방법인 'border'속성을 사용해 보겠다.  
```html
<table border="1">
```
속성 값은 숫자로 입력, 선 두께를 나타냈던 거 같다.  
책처럼 깔끔한 선은 아니지만 입체감 가득한 표를 얻을 수 있다..!   
### 'rowspan' 'colspan' 속성
☐ 셀 (칸) 병합에 사용되는 속성들이다.  
'rowspan' : 행 병합  
'colspan' : 열 병합  
속성 값으로 병합하고 싶은 셀 개수를 적고, 그 개수만큼 행 또는 열을 비워야 한다.  
```html
<tr>
    <td>1</td>
    <td rowspan="2">한식</td> <!-- 내용이 겹치는 한식 카테고리끼리 병합 -->
    <td>된장찌개</td>
</tr>
<tr>
    <td>2</td>
    <!-- <td>한식</td> 위 항목 값에서 병합 -->
    <td>김치찌개</td>
</tr>
```
### `<thead>` `<tfoot>` `<tbody>` 태그
```html
<table>
    <thead>
        <tr>
            <th></th> <!-- thead에서는 th태그로 생성 -->
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tfoot> <!-- 순서 상으로 두번째 위치 하고 있지만 맨 마지막에 위치한다 -->
    	<tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tfoot>
    <tbody>
    	<tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
```
표에서 그룹화 할때 사용하는 태그  
헤더 - 푸터 - 바디 순으로 작성해야한다.  
`<thead>`태그에서 항목 생성할때 `<th>` 태그로 열을 생성해야한다.  
웹 접근성 향상 시키기 위해서 사용한다.  
표 페이지가 넘어간다고 하더라도 `<thead>` `<tfoot>` 은 고정이 된다.  
### `<col>` `<colgroup>` 태그
```html
<col>
<colgroup span="그룹화할 열 개수">
```
↓ 열(세로) 그룹화 할 때 사용하는 태그.  
`<col>`은 하나의 열, `<colgroup>`은 두개 이상의 열을 그룹할때 사용한다. 주로 스타일 적용을 위해 사용.  
이 태그들을 사용하기 위해서는 `<caption>` 태그 다음, `<tr>` 태그 전에 사용해야하고, 실제 열 개수와 동일해야한다.  
```html
<col style="width: 30px;"> <!-- 번호 -->
<colgroup span="2"></colgroup> <!-- 카테고리 / 음식 -->
```
번호 칸을 줄였다.
### 'scope' 속성
```html
<th scope="col"> <!-- 세로 방향 -->
<th scope="row"> <!-- 가로 방향 -->
<th scope="colgroup">
```
웹 접근성 향상을 목적, 제목을 나타내는 셀의 범위를 지정할 대 사용하는 속성이다.  
`<th>` 태그에서만 사용이 가능하다.  
'colspan' 'rowspan' 으로 병합된 셀일 경우 'colgroup' 'rowgroup' 사용해서 할 수 있다.