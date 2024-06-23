import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
    'type-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'style',
        'chore',
        'ci',
        'refactor',
        'revert',
        'test',
        'remove',
        'move',
        'docs',
        'perf',
      ],
    ],
  },
};

module.exports = Configuration;
