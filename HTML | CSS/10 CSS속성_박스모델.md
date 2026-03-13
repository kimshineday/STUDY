# CSS 필수 속성 다루기
## 박스 모델 구성 Box model
HTML 모든 요소가 사각형의 박스로 둘러 쌓여 있다.  
> margin : 요소의 외부 여백  
> border : 요소의 테두리 (경계선)  
> padding : 요소의 내부 여백  
> content : 요소 내용  

### margin / padding
margin : 박스 모델에서 가장 외부에 있는 영역. 외부 여백을 담당.  
padding : 요소의 내부 여백을 담당.  

> **margin / padding 속성 영역**  
> - top  
> - right  
> - bottom  
> - left  

직접 방향을 지정해 여백을 조절 할 수 있는 방법, 통합해 작성하는 방법이 있다.  
```css
선택자 {
    /* 지정해서 설정하는 방법들 */
    margin-top: 크기;
    padding-top: 크기;
    
    /* 통합해서 작성하는 방법 */
    margin: top-bottom left-right; /* 속성 값 2개 : (top-bottom) (left-right) */
    margin: top left-right bottom; /* 속성 값 3개 : top (left-right) bottom */
    margin: top right bottom left;
    
    padding: 속성값 /* 하나의 값 : 모든 방향이 같은 값 */
}
```
속성 값을 2개 이상을 작성할 때, 공백으로 값을 구분한다.  

#### ❗️margin 겹침 현상 margin collapse
인접한 margin 값이 둘 중 더 큰 값으로 통일.  
첫 번째 요소의 bottom과 두번째 요소의 top이 겹쳐질 경우,  
이 둘의 값이 합쳐지는 것이 아니라
두 값 중 큰 값이 적용 된다.  

### border : 경계선
margin과 padding같이 top, right, bottom, left로 방향 지정해 사용 가능하기도 하며,  
다른 속성과 같이 함께 사용할 수 있다.  

> **border에서 사용 가능한 속성**  
> border-width : 선의 굵기 지정 (단위 포함)  
> border-style : 스타일 지정  
> color : 색상 지정  

[border-style 속성 값](CSS_box.html)

```css
선택자 {
	border: border-width border-style color;
}

/* 예시 */
p.solid {
	border: 3px solid orange; /* width값 style값 색상 지정 */
}
```
여백 설정과 비슷하게 border도 통합해서 작성이 가능하다.  

### content
html의 콘텐츠에 해당하는 부분들, 텍스트들이 출력되는 부분이다.  
영역자체를 다루는 속성은 없지만 제어하는 속성들이 있다. (텍스트 속성 등등..)  
```css
선택자 {
    width: 크기; /* 너비 */
    height: 크기; /* 높이 */
}
```
너비와 높이를 지정하는 속성을 사용할 수 있다.  

### box-sizing 속성
박스 모델을 다룰 때 CSS로 작성된 값과 웹 브라우저에서 구현된 값의 차이가 생기는 경우,  
(border + padding + content이 합해져 설정 값보다 크게 잡힌다.)  
이를 보완하기 위해 사용하는 속성이다.  
```css
선택자 {
	box-sizing: 속성 값; /* 기본 값으로 content-box 적용 되어있다.*/
}


div {
	box-sizing: border-box;
}
```
content-box : width, height 속성 적용 범위를 content 영역으로 제한  
border-box : width, height 속성 적용 범위를 border 영역으로 제한  

### display 속성
`block`, `inline`, `inline-block`  
기본적으로 가지고 있는 박스모델의 성격을 이 속성으로 바꿔줄 수 있다.  
```css
선택자 {
	display: 속성값; /* block, inline, inline-block */
}
```
block : 콘텐츠 크기와 상관 없이 가로 한줄을 다 차지함  
inline : 콘텐츠 크기만큼만 차지함  
inline-block : inline 요소처럼 너비가 콘텐츠 크기만큼 차지하는 것 외, 다른 성격은 block과 동일  

inline은 width, height 값 적용이 되지 않으며, 여백을 담당하는 margin과 padding은 좌, 우에 적용된다.
