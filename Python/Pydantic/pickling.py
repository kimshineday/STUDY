"""
## Pickling
파이썬 객체 구조를 바이트 스트림 (byte stream)으로 변환하는 과정.
-> Serialization, 직렬화
반대로 바이트 스트림 -> 파이썬 객체 되돌리는 과정 ## Unpickling 언피클링.
-> Deserialization, 역직렬화
"""

import pickle
from pydantic import BaseModel, Field

class BarModel(BaseModel):
    whatever: tuple[int, ...]

class FooBarModel(BaseModel):
    banana: float | None = 1.1
    foo: str = Field(serialization_alias='foo_alias')
    bar: BarModel

m = FooBarModel(banana=3.14, foo='hello', bar={'whatever':(1, 2)}) # whatever의 튜플 타입.


data = pickle.dumps(m)
print(data[::])
"""
b'\x80\x04\x95\xe6\x00\x00\x00\x00\x00\x00\x00\x8c\x08__main__\x94\x8c\x0bFooBarModel\x94\x93\x94)\x81\x94}\x94(\x8c\x08__dict__\x94}\x94(\x8c\x06banana\x94G@\t\x1e\xb8Q\xeb\x85\x1f\x8c\x03foo\x94\x8c\x05hello\x94\x8c\x03bar\x94h\x00\x8c\x08BarModel\x94\x93\x94)\x81\x94}\x94(h\x05}\x94\x8c\x08whatever\x94K\x01K\x02\x86\x94s\x8c\x12__pydantic_extra__\x94N\x8c\x17__pydantic_fields_set__\x94\x8f\x94(h\x10\x90\x8c\x14__pydantic_private__\x94Nubuh\x12Nh\x13\x8f\x94(h\x07h\x08h\n\x90h\x15Nub.'
"""
### 클래스 정보, 인스턴스 데이터, pydantic 내부 상태가 포함.

data2 = pickle.loads(data)
print(data2) # banana=3.14 foo='hello' bar=BarModel(whatever=(1, 2))

### 모델을 데이터 교환 형식으로 내보내는 것이 아닌 파이썬 객체 상태 그대로 보존, 복원에 사용.
#### -> 정확한 복제 필요, 프로세스나 머신으로 이동시켜야 할 때 직접적으로 사용.

