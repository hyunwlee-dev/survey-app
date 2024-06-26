export const gradeService = (service: string) => {
  let sum = 0;
  switch (service) {
    case '매우 불만족':
      sum += 1;
      break;
    case '불만족':
      sum += 2;
      break;
    case '보통':
      sum += 3;
      break;
    case '만족':
      sum += 4;
      break;
    case '매우 만족':
      sum += 5;
      break;
    default:
      sum += 0;
      break;
  }
  return sum;
};
