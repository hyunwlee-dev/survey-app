export const Survey = {
  SERVICE: {
    TITLE: '1. 서비스 만족도',
    QUESTION: '여러 항목 중 하나를 선택해주세요.',
    OPTIONS: ['매우 불만족', '불만족', '보통', '만족', '매우 만족'],
  },
  REVISIT: {
    TITLE: '2. 재방문 의사',
    QUESTION:
      '재방문 의사를 1에서 10까지 평가해 주세요. (1: 전혀 의사 없음, 10: 매우 의사 있음)',
  },
  FACILITY: {
    TITLE: '3. 시설 만족도',
    QUESTION: '다음 중 어떤 항목에 대해 만족하셨습니까? (중복 선택 가능)',
    OPTIONS: [
      '프론트 응대',
      '시설의 청결',
      '합리적인 가격',
      '편리한 위치',
      '인테리어',
    ],
  },
} as const;

export const Gretting = {
  TITLE: 'Survey',
  SUB_TITLE:
    '안녕하세요.\n인포그랩 호텔 설문조사입니다.\n설문조사에 성실히 응해주시길 바랍니다. (질문은 총 3개입니다.)',
} as const;

export const LOCALSTORAGGE_KEY = 'survey';
