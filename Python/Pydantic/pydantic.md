# Pydantic
Python에서 사용할 수 있는 데이터 검증 라이브러리.\
데이터를 여러 형식으로 쉽게 내보낼 수 있는 기능 제공.

## 기능
### Type hint
Rust 기반으로 핵심 검증 로직이 구성. `pydantic-core`\
스키마 검증 및 직렬화가 타입 주석으로 제어.\
Python 유형 힌트로 정의된다.
```python
from typing import Annotated, Literal
from annotated_types import Gt
from pydantic import BaseModel

class Fruit(BaseModel):
    name: str
    color: Literal['red', 'green'] # 'red' or 'green'
    weight: Annotated[float, Gt(0)]
    bazam: dict[str, list[tuple[int, bool, float]]]
```
### 직렬화
3가지 방법.
```python
from datetime import datetime
from pydantic import BaseModel

class Meeting(BaseModel):
    when: datetime
    where: bytes
    why: str = 'No idea'

m = Meeting(when='2020-01-01T12:00', where='home')

print(m.model_dump(exclude_unset=True))
# {'when': datetime.datetime(2020, 1, 1, 12, 0),'where': b'home'}
print(m.model_dump(exclude={'where'}, mode='json'))
# {'when': '2020-01-01T12:00:00','why': 'No idea'}
print(m.model_dump_json(exclude_defaults=True))
# {"when":"2020-01-01T12:00:00","where":"home"}
```

### JSON 스키마
json 스키마를 통해 다른 도구와 쉽게 통합할 수 있다.
### Strict / Lax
**Strict** 데이터 변환 X\
**Lax** 올바른 유형으로 강제 변환 기능.

...