import SectionTitle from "@/app/(components)/features/section-title";
import { getFormattedYearsOfExperience } from "@/lib/utils";

export default function Home() {
  const formattedYears = getFormattedYearsOfExperience();
  const subtitle = `
    안녕하세요! ${formattedYears} 프론트엔드 개발자 최푸름입니다. <br/> 사용자와 개발자의 보다 나은 경험을 만들어 나가기 위해 노력합니다.
    의무적으로 해야만 하는 일로써 접근하는 것이 아닌 프로젝트의 개발자, 사용자 경험 개선과 회사의 발전을 위해 고민합니다.
  `;

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20">
      <SectionTitle
        title="Hello, I'm Pureum Choi. Frontend developer."
        subtitle={subtitle}
        highlightText="Frontend"
      />
    </div>
  );
}
