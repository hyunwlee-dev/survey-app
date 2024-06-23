# 인포그랩 FE 과제

![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/hyunwlee-dev/survey-app)

![Next.JS:v14.2.4](https://img.shields.io/badge/v14.2.4-575757?logo=next.js&label=Next.js&labelColor=000000)
![React:v18.3.0](https://img.shields.io/badge/v18.3.0-575757?logo=react&logoColor=000000&label=React&labelColor=61DAFB)
![TypeScript:v5.5.2](https://img.shields.io/badge/v5.5.2-575757?logo=typescript&logoColor=FFFFFF&label=TypeScript&labelColor=3178C6)
![Storybook:v8.1.10](https://img.shields.io/badge/v8.1.10-575757?logo=sass&logoColor=FFFFFF&label=Storybook&labelColor=FF4785)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Commit Message Convention

Commit messages in this project should follow the following format to ensure consistency and clarity:

```
<type>(<scope>): <message>
```

- `<type>`: The type of the commit, which must be one of the following:

| Type       | Description                                   |
| ---------- | --------------------------------------------- |
| `feat`     | 새로운 기능 추가 시                           |
| `fix`      | 버그 해결 / 수정 시                           |
| `perf`     | 성능 개선 시                                  |
| `refactor` | 버그 수정 X, 기능 추가 X, 코드 수정 시        |
| `style`    | 스타일 추가 시                                |
| `docs`     | 도큐멘테이션 추가 또는 수정 시                |
| `test`     | 테스트 관련 수정 / 추가 시                    |
| `chore`    | 설정 변경 (빌드 관련 / 패키지 매니저 관련 등) |
| `revert`   | 작업 되돌리기 시                              |
| `move`     | 파일 이동 / 이름 수정 시                      |
| `remove`   | 불필요한 파일 제거 시                         |
| `ci`       | CI 구성 파일 및 스크립트 변경 시              |

- `<scope>` (optional): The scope or context of the commit, indicating the affected module, file, or feature.
- `<message>`: A concise and clear description of the commit.

### Example Commit Messages

Here are some example commit messages that adhere to the convention:

- `feat(auth): add user login functionality`
- `fix(api): resolve data processing error`
- `style(css): update styling for the login page`
- `docs(readme): update project description`
- `test(unit): add tests for user management module`
- `chore(deps): update package dependencies`
- `revert: revert previous commit`
- `move(src): move model classes to a new directory`
- `remove(deprecated): remove unused functions`
- `ci(travis): update test environment configuration`

## Chromatic

You can view the Storybook for this project on Chromatic:

- [main]()
