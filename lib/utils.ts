import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getStartDate } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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

/**
 * React key prop을 위한 고유한 키를 생성합니다.
 * @param prefix 키의 접두사 (예: "word", "item")
 * @param index 배열 인덱스
 * @param suffix 추가 식별자 (선택사항)
 * @returns 고유한 키 문자열
 */
export function generateUniqueKey(
  prefix: string,
  index: number,
  suffix?: string
): string {
  const randomSuffix = Math.random().toString(36).substr(2, 9);
  const parts = [prefix, index.toString(), randomSuffix];
  if (suffix) {
    parts.splice(-1, 0, suffix);
  }
  return parts.join("-");
}

/**
 * 특정 섹션으로 스크롤 이동
 * @param sectionId - 스크롤할 섹션의 ID (예: "home", "about")
 * @param smooth - 부드러운 스크롤 여부 (기본값: true)
 */
export function scrollToSection(
  sectionId: string,
  smooth: boolean = true
): void {
  const element = document.querySelector(`#${sectionId}`);
  if (element) {
    element.scrollIntoView({
      behavior: smooth ? "smooth" : "instant",
      block: "start",
    });
  }
}

/**
 * URL 해시를 기반으로 해당 섹션으로 스크롤
 * @param delay - 스크롤 지연 시간 (ms, 기본값: 100)
 */
export function scrollToHashSection(delay: number = 100): void {
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    setTimeout(() => {
      scrollToSection(hash);
    }, delay);
  }
}

/**
 * 경력 기간을 계산합니다.
 * @param startDate - 시작 날짜
 * @param endDate - 종료 날짜 (null이면 현재까지)
 * @returns "X년 Y개월" 형식의 문자열
 */
export function calculateDuration(
  startDate: Date,
  endDate: Date | null
): string {
  const end = endDate || new Date();
  const diffTime = Math.abs(end.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);

  if (years > 0 && months > 0) {
    return `${years}년 ${months}개월`;
  } else if (years > 0) {
    return `${years}년`;
  } else {
    return `${months}개월`;
  }
}

/**
 * 날짜를 한국어 형식으로 포맷팅합니다.
 * @param date - 포맷팅할 날짜
 * @returns "YYYY년 MM월" 형식의 문자열
 */
export function formatDate(date: Date): string {
  return `${date.getFullYear()}년 ${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}월`;
}
