## 컴포넌트 설계와 리팩토링
<br>

todo list를 만들어 보면서 컴포넌트 설계와 리팩토링 하는 방법에 대해 학습했습니다.
<br><br>

### 📅 컴포넌트 하나로 todo 만들기

#### 할 일 추가(Create)<br>
#### 할 일 조회(Read)<br>
#### 할 일 삭제(Delete)<br>
#### localStorage에 데이터 저장- TodoItem CRUD 반영
<br>

### 📅 리팩토링 (컴포넌트 설계와 상태 관리)
<br>

#### 🚀 컴포넌트 설계
- 컴포넌트를 UI 관심사 별로 구분해서 구현
- 컴포넌트 트리:<br>
  루트 컴포넌트(App 컴포넌트) ➡️ 하위 컴포넌트(Header, Input, List 컴포넌트)
- 코드의 재사용성이 올라가고, 빠르게 화면 제작 가능
#### 🚀 상태 관리
상위 컴포넌트와 하위 컴포넌트 관계가 생겼을 때 상태 관리
- 상태 위치
- 상태 주고받기 위한 구조
- Lifting State Up
