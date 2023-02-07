# 🎙 프터뷰

## 🔎 소개

![프터뷰 배너](https://user-images.githubusercontent.com/96723716/217214190-e8bc3e83-4038-4469-b528-be39b97c9bf2.png)
### "당신도 취업할 수 있다!"
</br>

암기하는 과정은 중요하지 않아요! 오래 기억해서 면접할 때 잘 말할 수 있느냐가 중요한 거죠! 

지루한 시간을 보내고 있을 취준생을 십분 이해해 즐거움과 더불어 장기기억으로까지 만들 수 있는 게임을 만들어 찾아왔어요.

널리 알려진 프론트엔드 주니어 개발자를 위한 기술면접 리스트를 반영하여 암기의 틀을 제공하고 틀린 문제를 오답노트에서 마주하여 복습해 보아요.

## 🙋‍♀️ 팀원 소개

|[노종열](https://github.com/Exist95)|[홍다희](https://github.com/hongdahee)|
|:---:|:---:|
|FULL|FRONT|
|<img src="https://avatars.githubusercontent.com/u/96723716?v=4" width="100">|<img src="https://avatars.githubusercontent.com/u/107875003?v=4" width="100">|

## 🌟 스택
![image](https://user-images.githubusercontent.com/96723716/217108019-5aa27511-30e5-4973-a4e7-aa25de5ec771.png)

## 👟 실행 방법
### 코드 실행 방법

```bash
#FE
npm install
npm start

#BE
npm install
npm start
server port - 8080
```

## 📱 기술시연
|                   메인 & 비로그인 시 화면                 |                   회원가입                    |                         로그인                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107875003/217010267-d401000b-d5a0-4133-9d63-b3bcc595aa8f.gif" alt="메인_비로그인" width=70%> | <img src="https://user-images.githubusercontent.com/107875003/217010961-37e694e7-7a04-4cc5-bf7d-f24cb48a1a88.gif" alt="회원가입" width=70%> | <img src="https://user-images.githubusercontent.com/107875003/217011296-23918862-9300-4070-921d-3076f6dc15f0.gif" alt="로그인" width=70%> |

|                         문제 페이지                         |                  오답노트                  |                         랭킹                         |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107875003/217012108-fb40ebb6-d4b2-49ae-a40e-21d079ae9309.gif" alt="문제페이지" width=70%> | <img src="https://user-images.githubusercontent.com/107875003/217013174-1d943c3c-8b57-467c-b6a5-61fcb9827860.gif" alt="오답노트" width=70%> | <img src="https://user-images.githubusercontent.com/107875003/217013473-d10acd31-c1ac-47c8-8719-7bd59f65b021.gif" alt="랭킹" width=70%> |

|                다크모드 & 로그아웃                 |                     비밀번호 변경                      |                     회원탈퇴                     |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107875003/217016280-baa76448-a22f-4355-a37d-dfe90df957df.gif" alt="다크모드_로그아웃" width=70%> | <img src="https://user-images.githubusercontent.com/107875003/217016731-8445bd22-ad04-4b48-84e2-77c942869f13.gif" alt="비밀번호변경" width=70%> | <img src="https://user-images.githubusercontent.com/107875003/217017029-4ea39779-4530-44c1-ab76-d24bdc442e68.gif" alt="회원탈퇴" width=70%> |

## 📃 문서
<ul>
<li><a href="https://spiritual-ragdoll-604.notion.site/API-03ad22c90d244cff818b3e7dc0c7060d" target='_blank'>API 명세서</a></li>
<li><a href="https://www.figma.com/file/zQQBliGhOTXXbfsQ1n0wQp/프터뷰?node-id=0%3A1&t=pnKg2G1DgaR6ceTD-1" target='_blank'>FIGMA</a></li>
<li><a href="https://spiritual-ragdoll-604.notion.site/4d58c30de54d4f0c8ea3940e2a205514" target='_blank'>종열님 회고</a></li>
<li>다희님 회고</li>
</ul>

## 🚑 미해결 이슈
- [ ] 스토어 등록
- [ ] 예쁜 애니메이션 적용
- [ ] 폰트 적용
- [ ] 모바일 사이즈 별 화면 조정

## 🤔 기술적인 고민들
### 어떤 패턴이 현업에서 많이 쓰일까?
- FE의 경우, MVVM 패턴을 취하면 가독성 부분에서 우수할 것이라고 판단하여 적용했습니다.
- BE의 경우, 가장 많이 사용되는 MVC 패턴을 취하여 보편적인 형태를 취했습니다.

### 굳이 리액트 네이티브?
- 네이티브에 대한 이해도를 높이는 것에 목적을 두었습니다.
- PWA를 적용하지 않는 순수한 모바일 애플리케이션을 만들고 싶었습니다.

## 🎲 커밋 컨벤션
### 예시) [STYLE]: 스타일 변경

- [FEAT]: 새로운 기능 (기능 구현)
- [FIX]: 버그 수정
- [DOCS]: 문서 변경 (README 등등)
- [STYLE]: 스타일 변경
- [REFECTOR]: 리팩토링에 대한 커밋
- [TEST]: 누락된 테스트 추가 또는 기존 테스트 수정
- [CHORE]: 코드 수정 없이 설정을 변경, 패키지 설치
- [MERGE]: 코드 병합

## ⚙ Git 머지 전략
- Squash and merge
