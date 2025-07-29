import time # 시간 제어
import signal # 신호 처리

"""
signal 모듈
비동기 이벤트에 대한 핸들러 모듈러.
키보드, 마우스 인터럽트가 발생 했을 때, 대응할 수 있도록 인터럽트 핸들러를 만들어 줄 수 있는 모듈
"""

# 인터럽트 핸들러 -> 인터럽트 서비스 루틴의 역할을 수행
def handler(signum, frame):
    print(f"""!!키보드 인터럽트 감지!!
        신호 번호 : {signum}
        스택 프레임 : {frame}
        """)
    exit() # 강제 종료 함수, 무한 루프 돌리다가 인터럽트 생겼을 경우 대응하기 위함

# Signal에서 제공하는 함수
signal.signal(signal.SIGINT, handler)
# SIGINT, 키보드 인터럽트 상수와 만든 함수를 넣음.

# 테스트를 위한 코드
while True:
    print('5초 간격으로 출력 중 ...')
    time.sleep(5)