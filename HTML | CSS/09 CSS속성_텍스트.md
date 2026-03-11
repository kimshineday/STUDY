# CSS 필수 속성 다루기
## 텍스트 속성
### 'font-family' 속성 : 글꼴 지정
```css
선택자 {
	font-family: <글꼴1>, <글꼴2>, ... <글꼴 유형>;
}

/* 예시 */
* {
    font-family: 'NostalgicGellyRoll';
}

p {
	font-family: BatangChe, "Times New Roman"; /* 글꼴 2개 지정 */
}

p {
	font-family: BatangChe, "Times New Roman", serlif; /* 글꼴 유형 지정 */
}
```
속성 값으로 글꼴명 작성, 1개 이상의 글꼴을 나열 가능 (쉼표로 구분한다.)  
글꼴 유형 작성을 권장한다. (글꼴의 형태)  
#### 글꼴 유형  
serif : 삐짐이 있는 명조 계열  
sans-serif : 삐짐이 없고 굵기 일정한 고딕 계열  
monospace : 텍스트 폭, 간격이 일정한 글꼴  
fantasy : 화려한 글꼴  
cursive : 손으로 쓴 것 같은 글꼴 (필기체 계열)  

### 'font-size' 속성 : 폰트 크기
```css
선택자 {
	font-size: 크기;
}

/* 예시 */
p {
	font-size: 14px; /* 단위 포함 */
}
```
웹 브라우저 기본 스타일 시트에서의 일반적인 텍스트 크기는 보통 16px.  
다른 크기로 지정할 수 있다.  
### 'font-weight' 속성 : 굵기 지정
```css
선택자 {
	font-weight: 숫자표기 혹은 키워드 표기;
}

/* 예시 */
p {
	font-weight: 100; /* 숫자 표기는 100 부터 900까지의 값을 사용*/
}

p {
	font-weight: lighter; /* 키워드 표기 (lighter/ normal/ bold/ bolder) */
}
```
속성 값을 숫자 표기, 키워드 표기 두가지 방법으로 사용할 수 있다.  
#### 숫자 표기법과 키워드 표기법 비교  
- normal : 숫자 표기법 400
- bold : 숫자 표기법 700

- lighter : 부모 요소 굵기보다 얇게 지정
- bolder : 부모 요소 굵기보다 굵게 지정

lighter와 bolder는 상대적인 값이다.  
### 'font-style' 속성 : 글꼴 스타일 지정
```css
선택자 {
	font-style: 속성값;
}

/* 예시 */
p {
	font-style: italic;
}
```
#### 'font-style' 속성 값
- normal : 기본 형태  
- italic : 이탤릭체 (이탤릭체 적용 + 기울임)  
- oblique : 글자 기울임  

'italic'과 'oblique' 속성 값은 크게 차이가 나진 않는다.  
### 'font-variant' 속성 : 영문 텍스트 (크기 작은 대문자)
```css
선택자 {
	font-variant: small-caps;
}
```
### 'text-align' 'text-decoration' 속성
```css
선택자 {
    text-align: 속성값; /* 텍스트 정렬 */
    text-decoration: 속성값; /* 텍스트 줄 긋기 */
}
```
텍스트 정렬 'text-align' 속성 값은 left(왼쪽) center(중앙) right(오른쪽) justify(양쪽 정렬)를 사용할 수 있다.  
#### 텍스트 줄 긋기 'text-decoration'
- none : 삭제
- line-through : 취소선
- overline : 텍스트 위
- underline : 텍스트 아래

'none'은 링크 `<a>` 태그에서 줄 없앨 때 사용했었다.  

### 'letter-spacing' 'line-height' 속성 : 자간과 줄 높이(행간) 설정
```css
선택자 {
    letter-spacing: 크기; /* normal 또는 크기 값 */
    line-height: 속성값; /* normal / 숫자 / 퍼센트 / 크기 */
}
```
자간을 설정할 때 (letter-spacing) 크기 값을 지정,  
줄 높이 (line-height) 설정할 때는 크기로 지정하는 방법과 숫자와 퍼센트로 현재 폰트 사이즈 기준으로 곱한 값으로 적용하는 방법이 있다.  
#### 'line-height' 설정 방법  
- normal : 웹 브라우저 기본 값  
- 숫자 : 현재 크기 값에 입력한 숫자를 곱한 값으로 적용  
- % : 현재 크기 값에 입력한 비율을 곱한 값으로 적용  
- 크기(px) : 입력한 크기로 설정  

'line-height' 행간을 지정할 땐 폰트 사이즈보다 크게 지정해 가독성을 높이는 게 좋다.