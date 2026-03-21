## 기존 Django에서의 인증 방식
Django 자체적으로 사용자 인증 시스템 `django.contrib.auth`을 기본적으로 제공.  
사용자의 계정 (username.email, password), 그룹, 권한 등 쿠키 기반 세션 관리.  
-> 유저가 회원가입을 하기위해 username, email, password 등 설정  
-> 로그인 시, 내부 DB에 저장된 정보와 비교해 인증 후 성공여부 출력.  

기본으로 제공되는 기능 외, 이메일 인증, 소셜 로그인 사용시 인증을 별도로 구현할때, 별도로 구현하거나 서드파티 패키지를 사용해야한다.  

이 두 흐름을 통합하는 과정에서 번거로움을 도와주는 라이브러리라고 볼 수 있다. [(공식문서의 Introduction)](https://docs.allauth.org/en/latest/introduction/index.html)
  
# allauth
장고로 로그인 기능 구현 중 알게된 라이브러리.
## Feature
- 여러 인증 방식을 지원
- OAuth 1.0/2.0 지원
- B2B SAML 2.0
- adapter 기능 활용해서 로직 커스텀 가능
등등

`allauth.account` > 일반 로그인\
`allauth.socialaccount` > 소셜 로그인\
`allauth.mfa` > mfa 관련