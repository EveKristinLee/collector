![image](https://github.com/EveKristinLee/collector/assets/56919637/b876d6e4-827b-440d-82f3-9f612a0a1cc9)


## 📜 서비스 내용

영화관 홈페이지에 올라오는 **기획상품** **이벤트들의 소식을 한눈에 모아 볼 수 있는 서비스**입니다.

현재 위 서비스에서 제공하는 핵심 기능입니다.

1. CGV, 롯데시네마, 메가박스, 씨네큐의 영화관에서 진행하는 굿즈 이벤트들을 한곳에서 모아보기

1. 각 영화관 굿즈의 소진 여부를 사용자들끼리 공유하는  커뮤니티
2. 사용자들끼리 굿즈를 사고팔 수 있는 커뮤니티

## 🛠 기술 스택

- `SpringBoot`, `Java`, `JPA`
- `AWS RDS`, `MariaDB`, `Firebase`

## 🖥 담당 기능

### 회원가입

**자체 회원가입**

새로운 사용자가 이메일, 비밀번호 닉네임을 입력하면 데이터베이스에 저장한다.

- 세가지 정보는 필수로 입력해야 한다.
- 이메일과 닉네임은 중복확인을 한 후에 저장할 수 있다.
- SHA256을 사용해서 비밀번호를 암호화 한 후 저장한다.

**소셜 회원가입/로그인 - Google**

사용자의 구글 계정을 통해서 로그인을 할 수 있다.

- 비밀번호의 경우 “이메일 + google”로 설정하여 저장한다. 이럴경우 보안 문제가 있을 수 있으므로 구글 로그인을 할 경우에만 로그인이 가능하게 해준다.
- 닉네임의 경우 기존의 사용자와 중복이 있을 수 있어 사용자의 “닉네임 + 사용자 데이터베이스의 key값 + 임의의 숫자값”을 통해 중복을 최대한 피해준다.

### 로그인

사용자가 이메일과 비밀번호를 입력하면 데이터베이스에서 사용자 정보가 존재하는지 정보가 존재한다면 사용자의 정보를 결과값으로 전송한다.

- HttpSession을 사용해서 입력한 이메일과 비밀번호가 데이터베이스에 존재하면 세션을 생성한다.
- 로그아웃 할때는 session의 존재 확인 후 세션을 삭제한다.

### 1:1 채팅 기능

두명의 사용자가 실시간으로 대화를 할 수 있다.

- 사용자가 입력한 내용을 데이터베이스에 저장한다.
- 사용자의 채팅창 목록 조회한다.
- 사용자가 선택한 채팅창의 내용 조회한다.

### 관리자페이지

신고당한 사용자들의 신고 내용을 시간순으로 볼 수 있다.

- 신고당한 글의 내용을 볼 수 있다.
- 신고 사유를 볼 수 있다.
- 신고당한 사용자를 정지시킬 수 있다.

## 👀 시연 화면

### 1) 홈

![image](https://github.com/EveKristinLee/collector/assets/56919637/dc0a8470-69b3-4e53-8603-8318ea1df9c7)


### 2) 이벤트 조회

![image](https://github.com/EveKristinLee/collector/assets/56919637/78e6347c-71ca-469f-a29d-02780e85987c)


### 3) 회원가입/로그인

![image](https://github.com/EveKristinLee/collector/assets/56919637/49ce3add-6c48-4f0f-97a1-383824d80730)

![image](https://github.com/EveKristinLee/collector/assets/56919637/8234258d-8a2d-47c9-ad48-1a59bd1ad1c7)


### 4) 정보 공유

![image](https://github.com/EveKristinLee/collector/assets/56919637/7a505465-983b-4b03-8a22-c9265437a3d2)

![image](https://github.com/EveKristinLee/collector/assets/56919637/ba7d8ef9-64d6-4080-913d-a1c7806d756c)


### 5) 대리 구매

![image](https://github.com/EveKristinLee/collector/assets/56919637/8d1c5a7d-91d8-4a72-9124-b7516ba39743)


### 5) 실시간 채팅

![image](https://github.com/EveKristinLee/collector/assets/56919637/8de5cfe0-7412-414d-a48c-cf23274b2f3c)


### 6) 마이페이지

![image](https://github.com/EveKristinLee/collector/assets/56919637/fa8fa726-f210-4455-ab94-656b628eb678)


