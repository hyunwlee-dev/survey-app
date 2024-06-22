module.exports = {
  types: [
    { value: 'feat', name: 'feat: 새로운 기능 추가 시' },
    { value: 'fix', name: 'fix: 버그 해결 / 수정 시' },
    { value: 'perf', name: 'perf: 성능 개선 시' },
    {
      value: 'refactor',
      name: 'refactor: 버그 수정 X, 기능 추가 X, 코드 수정',
    },
    { value: 'style', name: 'style: 스타일 추가시' },
    { value: 'docs', name: 'docs: 도큐멘테이션 추가 또는 수정 시' },
    { value: 'test', name: 'test: 테스트 관련 수정 / 추가 시' },
    {
      value: 'chore',
      name: 'chore: 설정 변경 (빌드 관련 / 패키지 매니저 관련 등)',
    },
    { value: 'revert', name: 'revert: 작업 되돌리기 시' },
    { value: 'move', name: 'move: 파일 이동 / 이름 수정 시' },
    { value: 'remove', name: 'remove: 불필요한 파일 제거 시' },
    { value: 'ci', name: 'ci: CI 구성 파일 및 스크립트 변경 시' },
  ],
  scopes: [
    'component',
    'css-style',
    'custom-hook',
    'store',
    'util',
    'api',

    'wrong codes',
    'spaghetti codes',
    'alien codes',

    'assets',
    'package',

    'lint',
    'formatting',

    'config',
    'workflow',

    // NOTE: .releaserc.js
    'breaking',
    'no-release',
    'README',
  ],
  allowCustomScopes: true,
};
