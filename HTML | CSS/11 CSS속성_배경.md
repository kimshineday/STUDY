# CSS 필수 속성 다루기
## 배경 설정하기
배경 색상을 지정하거나 이미지로 채울 수 있다.  
### 'background-color' 속성
```css
background-color: 색상값;

/* 예시 */
html {
    background-color: #FFF8DC;
}

div.background {
    max-width: 900px; /* 박스의 최대 너비 */
    margin: 40px auto; /* 상하 40px, 좌우 자동 (가운데 정렬) */
    background-color: #FFFFF0; /* 박스 배경색 */
    border-radius: 10px; /* 모서리를 둥글게 */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
    padding: 30px; /* 박스 내부 여백 */
}
```
전에 작업했던 CSS 코드를 가져왔다.  
전체 배경색을 html로 입히고, 박스를 만들어 색상을 채우는 방식으로 구현했었다.  
(html에다 하는게 맞는지는 잘 모르겠다.)  

### 'background-image' 속성
```css
background-image: url('이미지경로')

/* 예시 */
html { /* 전체 배경 */
    background-image: url('../img/Gemini_Generated_Image_k8wuook8wuook8wu.png');
    background-position: center;
    background-size: cover;
    font-family: 'KCCChassam';
    font-size: 30px;
}
```
이것도 역시 예전에 작업한 코드를 가져왔다.  

요소에 배경을 입히는 원리이기 때문에 width, height 속성을 같이 사용해야한다. (color도 마찬가지)  
```css
div {
    width: 80px;
    height: 60px;
    background-image: url('');
}
```
요소와 배경 크기가 맞지 않으면 이미지가 잘리거나 반복 되는 등.  깨지는 경우가 있기에 맞춰서 설정해주는게 좋다.  
#### 'background-repeat' 속성
```css
background-repeat: 속성값;
```
요소보다 이미지가 작을 경우, 기본적으로 이미지를 자동으로 반복해서 채워준다.  
이 속성을 사용해 이미지 반복 설정을 변경할 수 있다.  

> background-repeat 속성 값  
> - no-repeat : 이미지 반복 X  
> - repeat-x : 이미지를 가로 방향으로 반복  
> - repeat-y : 이미지를 세로 방향으로 반복  
> - repeat : 이미지를 가로, 세로 방향으로 반복  
> - round : 이미지가 요소에 맞도록 크기를 자동으로 조절해서 반복  
> - space : 이미지가 잘리지 않도록 반복  

#### 'background-size' 속성
```css
background-size: 속성값;
```
이미지 크기를 지정할 수 있다.  
> background-size 속성 값, 지정 방법  
> - auto : 이미지 크기 유지  
> - cover : 이미지 가로-세로 비율 유지, 크기 확대 및 축소시켜 요소의 배경에 꽉 채움  
> - contain : 이미지 가로-세로 비율 유지, 크기 확대 및 축소시켜 요소안으로 들어가도록 설정  
> - 숫자 : 이미지 크기 직접 지정  

contain은 남은 빈 부분이 있을 경우, 반복해서 채워준다.

```css
html { /* 전체 배경 */
    background-image: url('../img/Gemini_Generated_Image_k8wuook8wuook8wu.png');
    background-position: center;
    background-size: cover; /* 요소 배경에 꽉 채움 */
    font-family: 'KCCChassam';
    font-size: 30px;
}
```
#### 'background-position' 속성
```css
background-position: x위치 y위치;
```
이미지 위치를 지정하는 방법.  
> background-position 속성 값  
> - x (가로) : left, center, right  
> - y (세로) : top, center, bottom  
> - 공통 : px, rem, em, %  

두개의 값을 넣어 x, y위치를 직접 지정할 수 있고, 한 값만 넣어서도 지정할 수 있다.  
값이 1개인 경우에는 y위치는 center로 지정이 된다.  
```css
html { /* 전체 배경 */
    background-image: url('../img/Gemini_Generated_Image_k8wuook8wuook8wu.png');
    background-position: center; /* 중앙으로 정렬 */
    background-size: cover;
    font-family: 'KCCChassam';
    font-size: 30px;
}
```
여기서는 값 하나만 넣어 중앙으로 정렬 시켰다.  

#### 'background-attachment' 속성
```css
background-attachment: 속성값;
```
스크롤할 때, 이미지의 작동 방식을 결정한다.  
> background-attachment 속성 값  
> - local : 삽입된 이미지 요소와 웹 브라우저에서 모두 스크롤  
> - scroll : 삽입된 이미지가 요소에서 고정, 웹 브라우저에서는 스크롤  
> - fixed : 삽입된 이미지가 요소와 웹 브라우저에서 고정  

#### 한번에 지정하는 방법
```css
background: color값 image값 position/size값 attachment값;
```
위 방식으로 한줄로 지정을 해줄 수 있다.  
```css
div {
    background-color: yellow;
    background-image: url('');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    background-attachment: fixed;
}

/* 한 줄 작성 */
div {
    background: yellow url('') no-repeat center/100% 100% fixed;
}
```
position/size 값에서의 `/` 구분해서 작성해야하며, url, attachment의 순서는 크게 상관이 없다고 한다.  
가독성을 생각할때, 분리해서 작성하는게 좋다.