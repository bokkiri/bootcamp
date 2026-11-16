# 2차 AI 부트캠프 기초반 모집 자료

| 파일 | 설명 |
|---|---|
| `poster.html` | 모집 포스터 (A4 1쪽) |
| `guide.html` | 안내서 (A4 2쪽) |
| `config.js` | 신청 링크·마감일·문의처 설정 |
| `apply.js` | 설정값으로 QR·링크·마감일을 채우는 스크립트 |
| `vendor/qrcode.js` | QR 생성 라이브러리 (qrcode-generator, MIT) |

## 신청 링크 넣는 법

1. 구글 설문을 만든 뒤 공유 링크를 복사합니다.
2. `config.js`의 `applyUrl`에 링크를, `deadline`에 마감일을 적습니다.
3. `poster.html`, `guide.html`을 브라우저로 열면 QR 코드가 자동으로 만들어집니다.
4. 인쇄(Ctrl+P) → "PDF로 저장", 배경 그래픽 켜기, 여백 없음으로 저장합니다.
