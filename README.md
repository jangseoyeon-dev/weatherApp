# 🌤️ 날씨 정보 앱 (Weather Info App)

이 프로젝트는 **OpenWeatherMap API**를 이용하여 **현재 날씨 정보를 제공**하는 웹 애플리케이션입니다. 사용자는 도시별 날씨(습도, 체감 온도, 풍속 등)를 조회할 수 있으며, 날씨에 따라 화면 배경도 변화합니다. 또한, 미리 설정된 도시 버튼을 클릭하면 해당 도시의 날씨 정보를 즉시 확인할 수 있습니다.

👉 https://weatherapp-delta-flame.vercel.app

<img width="1031" alt="스크린샷 2025-04-30 오후 3 42 07" src="https://github.com/user-attachments/assets/0bc32e6e-df66-45d0-9484-5a554b7a59e8" />

## 🚀 주요 기능

- **🌍 도시별 날씨 조회**: 사용자가 하노이, 파리, 뉴욕, 서울 등 미리 설정된 도시 버튼을 클릭하면 해당 도시의 날씨 정보가 표시됩니다.
- **🌡️ 날씨 정보**: 현재 날씨, 기온, 체감 온도, 습도, 풍속 등 다양한 날씨 정보를 제공합니다.
- **🌅 배경화면 변화**: 날씨에 따라 화면 배경이 자동으로 변화하여 더 몰입감 있는 사용자 경험을 제공합니다.

## 🛠️ 기술 스택

- **Frontend**: React(v19)
- **API**: OpenWeatherMap API
- **라이브러리**: fetch (API 요청을 위한 라이브러리)
- **기타**: 반응형 디자인을 위해 module CSS 사용

## 💻 설치 및 실행

```bash
git clone https://github.com/jangseoyeon-dev/weatherApp.git
cd weatherApp
npm i
npm run dev
