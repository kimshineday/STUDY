from datetime import datetime
from pydantic import BaseModel, Field

class Meeting(BaseModel):
    when: datetime
    where: bytes
    why: str = 'No idea'

m = Meeting(when='2020-01-01T12:00', where='home')
"""
print(m.model_dump(exclude_unset=True)) # {'when': datetime.datetime(2020, 1, 1, 12, 0),'where': b'home'}
print(m.model_dump(exclude={'where'}, mode='json')) # {'when': '2020-01-01T12:00:00','why': 'No idea'}
print(m.model_dump_json(exclude_defaults=True)) # {"when":"2020-01-01T12:00:00","where":"home"}
"""
# m.model_dump(exclude_unset=True) -> 모델에 명시적으로 설정된 필드만 딕셔너리 형태로 반환. 기본값은 제외.
# m.model_dump(exclude={'where'}, mode='json') -> where 필드 제외 반환, json 형식으로 출력
# m.model_dump_json(exclude_defaults=True) -> json 문자열 반환, 기본값 그대로면 제외.

"""
Python Mode
"""
class BarModel(BaseModel):
    whatever: tuple[int, ...]

class FooBarModel(BaseModel):
    banana: float | None = 1.1
    foo: str = Field(serialization_alias='foo_alias')
    bar: BarModel

m = FooBarModel(banana=3.14, foo='hello', bar={'whatever':(1, 2)}) # whatever의 튜플 타입.

# dictionary 형식의 Return
print(m.model_dump()) # {'banana': 3.14, 'foo': 'hello', 'bar': {'whatever': (1, 2)}}

print(m.model_dump(by_alias=True)) # {'banana': 3.14, 'foo_alias': 'hello', 'bar': {'whatever': (1, 2)}}
### 지정한 별칭 `foo_alias`으로 딕셔너리 생성.

# json 형식으로 Return
print(m.model_dump(mode='json')) # {'banana': 3.14, 'foo': 'hello', 'bar': {'whatever': [1, 2]}}
### json에서는 tuple -> json 배열의 list 변환

for name, value in m:
    print(f'{name}: {value}')
    # banana: 3.14
    # foo: hello
    # bar: whatever=(1,2)

print(dict(m)) # {'banana': 3.14, 'foo': 'hello', 'bar': BarModel(whatever=(1, 2))}

print(m) # banana=3.14 foo='hello' bar=BarModel(whatever=(1, 2))

### dump, 모델 인스턴스 유효성이 검증된 데이터를 파이썬 구조 (주로 dict),
### json 호환 형식으로 변환

#### dict나 json으로 pydantic 모델로 로드, `Model.model_validate(data)` 메서드 사용.
#### 데이터 유효성 검사가 다시 실행.
