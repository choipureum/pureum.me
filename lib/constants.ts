/**
 * 입사일 상수
 * 2022년 11월 1일
 */
export const START_DATE = {
  year: 2020,
  month: 10, // 11월 (0부터 시작하므로 10)
  day: 1,
} as const;

/**
 * 입사일을 Date 객체로 반환
 */
export const getStartDate = (): Date => {
  return new Date(START_DATE.year, START_DATE.month, START_DATE.day);
};
