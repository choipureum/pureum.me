import { getStartDate } from "./constants";

/**
 * 입사일을 기준으로 현재까지의 연차를 계산합니다.
 * @returns 계산된 연차 (숫자)
 */
export function calculateYearsOfExperience(): number {
  const startDate = getStartDate();
  const currentDate = new Date();
  const yearsOfExperience = currentDate.getFullYear() - startDate.getFullYear();

  const adjustedYears =
    currentDate.getMonth() < 10 ? yearsOfExperience - 1 : yearsOfExperience;

  return adjustedYears + 1;
}

/**
 * 연차를 한국어 형식으로 포맷팅합니다.
 * @param years 연차 (숫자)
 * @returns "X년차" 형식의 문자열
 */
export function formatYearsOfExperience(years: number): string {
  return `${years}년차`;
}

/**
 * 입사일을 기준으로 현재까지의 연차를 계산하고 포맷팅합니다.
 * @returns "X년차" 형식의 문자열
 */
export function getFormattedYearsOfExperience(): string {
  const years = calculateYearsOfExperience();
  return formatYearsOfExperience(years);
}
