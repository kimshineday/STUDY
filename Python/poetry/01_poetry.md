# Poetry
> Poetry는 Python에서 의존성 관리 및 패키징을 위한 도구입니다.\
> 프로젝트에서 필요한 라이브러리를 선언하면 Poetry가 해당 라이브러리의 설치, 업데이트를 관리해 줍니다.\
> Poetry는 반복적인 설치를 보장하는 Lockfile 기능을 제공, 배포용 빌드 기능도 지원합니다.  

개발할 때, 안정적인 개발 환경을 위해 '가상 환경'을 만들어서 진행을 한다.  
Python에서 의존성 관리 및 패키징, 즉 가상환경을 만들어 관리할 수 있는 도구다.  
## 설치 방법
```zsh
# 설치
curl -sSL https://install.python-poetry.org | python3 -

# 설치 및 버전 확인
poetry --version
```
여러 설치 방법들이 있지만 포에트리에서 권장하는 방법은 명령어로 실행하는 것이다.
```zsh
# Welcome to Poetry!

This will download and install the latest version of Poetry,
a dependency and package manager for Python.

It will add the `poetry` command to Poetry's bin directory, located at:

/Users/kimshineday/.local/bin

You can uninstall at any time by executing this script with the --uninstall option,
and these changes will be reverted.

Installing Poetry (2.3.2): Done

Poetry (2.3.2) is installed now. Great!

You can test that everything is set up by executing:

`poetry --version`
```
설치 완료.
## Poetry 기본 사용법
```zsh
# Project setup
poetry new 프로젝트이름

# 프로젝트 초기화
poetry init
poetry로 가상환경을 만들 때 사용하는 첫 명령어 정도가 될듯하다.
poetry new

poetry new test # test 이름의 프로젝트를 시작
```
### poetry new
새로운 python 프로젝트를 생성하는 명령어. (git에서 `git clone` 명령어 역할)  
패키지 구조와 테스트를 위한 폴더까지 자동으로 생성이 된다.  
-> 패키지 형태, 라이브러리 개발에 유용하게 쓸 수 있다. (재사용 가능한 모듈, pip 배포)  
`poetry new 프로젝트이름`을 실행 시, 아래와 같은 파일 구조가 생성이 된다.  
```zsh
# 폴더 구조
test/ # 프로젝트 이름 / 루트
├── pyproject.toml # 종속성 관리 -> 의존성 설정
├── README.md # 프로젝트 설명
├── test/ # 프로젝트 이름 -> 실제 코드 (패키지)
│   └── __init__.py
└── tests/ # 테스트 코드
    └── __init__.py
```
test로 만들어서 조금 혼동이 생기는 ...  
### poetry init
```zsh
# 기존 프로젝트 초기화
poetry init
```
미리 구성된 디렉터리를 초기화하는 명령어. (git에서 `git init`)
구조를 직접 설계해서 개발을 진행하게 된다.

명령어 실행 시 인터랙티브 방식으로 초기 설정을 하게 된다.
```zsh
poetry init

This command will guide you through creating your pyproject.toml config.

Package name [레포이름]: # 프로젝트(패키지) 이름
Version [0.1.0]: # 프로젝트 버전, 초기 개발단계에서는 기본값 사용 추천.
Description []: # 프로젝트 설명, 생략 가능
Author [이름 <이메일>, n to skip]: # 작성자 정보, 생략 가능
License []: # 라이선스 정보, 비워둬도 무방
Compatible Python versions [>=3.13]:  >=3.12 # 프로젝트에서 사용할 python 버전

Would you like to define your main dependencies interactively? (yes/no) [yes] no
# 실제 실행에 필요한 라이브러리 추가 여부 / 추후에 추가 가능
Would you like to define your development dependencies interactively? (yes/no) [yes] no
# 개발용 라이브러리 (pytest, black .. 등) 추가 여부 / 추후 추가 가능
```
내용 입력하지 않고 'enter'시 [대괄호] 안의 내용으로 대체된다.  
```zsh
[project]
name = "프로젝트 이름"
version = "0.1.0"
description = ""
authors = [
    {name = "이름",email = "이메일"}
]
readme = "README.md"
requires-python = ">=3.12"
dependencies = [
]


[build-system]
requires = ["poetry-core>=2.0.0,<3.0.0"]
build-backend = "poetry.core.masonry.api"


Do you confirm generation? (yes/no) [yes]
```
입력한 내용을 바탕으로 `pyproject.toml`을 생성해 준다.  

깃헙에서 레포지토리 생성해 왔기 때문에 `poetry init` 사용.  

## 종속성 관리
```zsh
# 종속성 추가
poetry add 라이브러리
poetry add 라이브러리 --group 그룹명

# 종속성 설치
poetry install
poetry install --only # 기본 종속성 세트 설치 X, 특정 그룹만 설치
poetry install --without 그룹명 # 언급한 그룹명 제외 설치
poetry install --with 그룹명 # 그룹 선택해 설치
poetry install --only-root # 프로젝트 루트만 설치, 다른 종속성 설치 X
poetry install --no-root # 종속성만 설치, 수정 불가

# 종속성 제거
poetry remove 라이브러리
poetry remove 라이브러리 --group 그룹명
```
### group
종속성 관리를 위해 그룹 속성을 사용할 수 있다. 

> -G 그룹명  
> --group 그룹명  

```zsh
poetry add fastapi 'uvicorn[standard]'

# group 지정 설치
poetry add pytest pytest-cov -G test
poetry add black isort mypy --group lint
```
추가할 때 그룹을 지정.  
일치하는 그룹이 없을 경우에는 새로 그룹이 생성이 된다.  
```toml
[dependency-groups]
test = [
    "pytest (>=9.0.2,<10.0.0)",
    "pytest-cov (>=7.1.0,<8.0.0)"
]
lint = [
    "black (>=26.3.1,<27.0.0)",
    "isort (>=8.0.1,<9.0.0)",
    "mypy (>=1.19.1,<2.0.0)"
]
```
또 그룹을 묶을 수 있다. (트리 구조로는 X)  
```toml
[dependency-groups]
test = [
    "pytest (>=9.0.2,<10.0.0)",
    "pytest-cov (>=7.1.0,<8.0.0)"
]
lint = [
    "black (>=26.3.1,<27.0.0)",
    "isort (>=8.0.1,<9.0.0)",
    "mypy (>=1.19.1,<2.0.0)"
]

dev = [
    { include-group = "test" },
    { include-group = "lint" },
]
```
test, lint 그룹을 dev 그룹으로 묶어 관리한다.  
## 실행
```zsh
poetry run 명령어

# fastapi 실행
poetry run uvicorn main:app --reload

# test 실행 예시
poetry run pytest
```
만들어둔 가상환경을 띄워 실행할 때 `poetry run` 을 붙여 사용한다.  

### poetry shell
개발할 때 매번 poetry run 붙이기 번거로울 때 사용하는 명령어.  
가상환경에 접근해 poetry run 생략해서 사용할 수 있다.  

poetry 2.0으로 넘어와서는 지원하지 않기 때문에 다른 방법을 사용해야 하는데...  
#### 플러그인 설치하기
```zsh
# 플러그인 추가
poetry self add poetry-plugin-shell

# 플러그인 삭제
poetry self remove poetry-plugin-shell

# 플러그인 목록 조회
poetry self show plugins
```
그래도 플러그인으로 기능을 계속해서 제공하기에 설치 후 'poetry shell'로 접근할 수 있다.  
[🔗 poetry plugin shell 레포](https://github.com/python-poetry/poetry-plugin-shell)

#### poetry env activate 사용
```zsh
eval $(poetry env activate)
```
공식문서에서 이야기하는 방법. [🔗 공식문서](https://python-poetry.org/docs/managing-environments/#bash-csh-zsh)  
현재 터미널에 환경을 적용한다.  