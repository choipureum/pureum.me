import React from "react";
import Image from "next/image";
import { Timeline } from "@/app/(components)/animations/Timeline";
import { getCurrentYearString } from "@/lib/utils";
import { CompanyInfo } from "./company-info";
import { DirectionAwareHover } from "@/app/(components)/animations/DirectionAwareHover";
import { TossfaceText } from "@/app/(components)/common/tossface-text";
import { ExternalLink } from "@/app/(components)/common/external-link";

export default function Career() {
  const data = [
    {
      title: getCurrentYearString(),
      content: (
        <div>
          <CompanyInfo
            company="NCSOFT"
            logo="/ncsoft.jpeg"
            position="Frontend Developer"
            team="인사이트플랫폼 개발팀"
            description="NCSOFT에서 글로벌 트렌드 분석 플랫폼을 개발하고 있습니다. 
            디자인 / 개발을 병행하며 게임 컨텐츠 인사이트 데이터를 분석하고 시각화하는 플랫폼을 개발했습니다. UX/UI 디자인을 중심으로 사용자 경험을 개선하기 위해 노력했습니다."
            techStack={[
              "React",
              "TypeScript",
              "Husky",
              "Commitlint",
              "Jenkins",
              "Biome",
              "Pnpm",
              "RTK Query",
              "MUI",
              "Motion",
              "Vite",
              "VitePress",
              "MCP",
              "Docker",
              "Kubernetes",
            ]}
          />

          <p className="mb-4 text-md font-normal text-neutral-200 md:text-md">
            <b>GTA</b>(Global Trend Analytics) 플랫폼 신규 개발 및 유지보수
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              <TossfaceText>✅</TossfaceText> 기획 / 디자인 / FE개발 담당
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              <TossfaceText>✅</TossfaceText> 개발기간 :{" "}
              <b>2025.01 ~ 2025.08</b>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              <TossfaceText>✅</TossfaceText> DAU <b>200명</b> 이상 사내 서비스
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              <TossfaceText>✅</TossfaceText> E2E 테스트 자동화 및 버전 관리
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              <TossfaceText>✅</TossfaceText> 게임 컨텐츠 인사이트 데이터 분석
              및 시각화
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <DirectionAwareHover imageUrl={"/project/gta-main.png"}>
              <p className="font-bold text-md">Global Trend Analytics</p>
              <p className="font-normal text-sm">기획 / 디자인 / FE개발</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={"/project/gta-rank.png"}>
              <p className="font-bold text-md">Global Trend Analytics</p>
              <p className="font-normal text-sm">기획 / 디자인 / FE개발</p>
            </DirectionAwareHover>
          </div>

          <div className="flex flex-col gap-2 mt-12">
            <p className="text-md font-normal text-neutral-200 md:text-md">
              <b>특허 출원 </b> (
              <code>출원번호 10-2025-0127742&nbsp;출원일 2025.09.08</code>)
            </p>
            <code className="text-sm">
              게임 모드를 전환하기 위한 전자 장치, 방법, 및 비일시적 컴퓨터
              판독가능 저장 매체(Electronic device, method, and non-transitory
              computer readable storage medium for switching game modes)
            </code>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <DirectionAwareHover imageUrl={"/project/patent-title.jpeg"}>
                <p className="font-bold text-xl">서지사항</p>
              </DirectionAwareHover>
              <DirectionAwareHover imageUrl={"/project/patent-picture.png"}>
                <p className="font-bold text-xl">도면</p>
              </DirectionAwareHover>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <CompanyInfo
            company="NCSOFT"
            logo="/ncsoft.jpeg"
            position="Frontend Developer"
            team="마케팅 서비스팀"
            description="NCSOFT 마케팅 서비스팀에서 전사 FE 라이브러리 KIT 개발과 애니메이션 기반 런칭/프로모션 페이지를 개발했습니다. 
            리소스 효율화를 위해 GSAP을 활용한 애니메이션 라이브러리를 개발했으며 마케팅 페이지 개발/배포 자동화 파이프라인 플랫폼을 개발했습니다."
            techStack={[
              "GSAP",
              "Motion",
              "Vue",
              "Canvas",
              "NPM",
              "JavaScript",
              "CSS3",
              "Sass",
              "VitePress",
            ]}
          />

          <p className="mb-4 text-md font-normal text-neutral-200 md:text-md flex items-center gap-2">
            <span>
              <b>KIT</b> FE Library 개발 및 유지 보수
            </span>{" "}
            <ExternalLink
              href="https://assets.playnccdn.com/res/kit/docs/getting-started.html"
              useFlipWords={true}
            />
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              <TossfaceText>✅</TossfaceText> 웹 서비스 제작에서 주 사용 기능을
              공통화 및 모듈화한 FE개발 Library
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              <TossfaceText>✅</TossfaceText> 브랜드 웹 1개당 개발기간 기존{" "}
              <b>7일에서 1-2일</b>로 대폭 단축
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              <TossfaceText>✅</TossfaceText> 외주사 및 관계사에 해당 라이브러리
              <code>VitePress</code>로 제작 및 가이드 개발 및 배포
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              <TossfaceText>✅</TossfaceText> 의존성 없는 모듈화 구조 설계
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <DirectionAwareHover imageUrl={"/project/kit.jpeg"}>
              <p className="font-bold text-xl">KIT</p>
              <p className="font-normal text-sm">FE Library</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={"/project/kit-360.webp"}>
              <p className="font-bold text-xl">KIT - Sequence360</p>
              <p className="font-normal text-sm">360 interactive</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={"/project/kit-alpha-video.webp"}>
              <p className="font-bold text-xl">KIT - AlphaVideo</p>
              <p className="font-normal text-sm">alpha animated video</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={"/project/kit-arttoy.webp"}>
              <p className="font-bold text-xl">KIT 활용 자사 이벤트 페이지</p>
              <p className="font-normal text-sm">LineageM 아트토이</p>
            </DirectionAwareHover>
          </div>

          <div className="flex flex-col gap-2 mt-12">
            <p className="mb-4 text-md font-normal text-neutral-200 md:text-md flex items-center gap-2">
              <span>다수 게임 IP 마케팅 및 런칭/프로모션 웹</span>{" "}
              <ExternalLink
                href="https://hoyeon.plaync.com/ko-kr/conts/2024/240828_launch"
                useFlipWords={true}
              />
            </p>

            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
                <TossfaceText>✅</TossfaceText> <code>GSAP</code> 과{" "}
                <code>KIT</code> 을 통한 마케팅 페이지 개발 (20건 이상)
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
                <TossfaceText>✅</TossfaceText> 사전예약시 <b>800만</b>명 이상
                유저 활동
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
                <TossfaceText>✅</TossfaceText> <code>i18n</code> 지원을 통한
                다국어 지원(<b>20</b>개 이상의 국가/언어 지원)
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
                <TossfaceText>✅</TossfaceText> 다양한 프로모션 및 브랜드웹을
                기획자의 의도에 맞게 개발 및 배포
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <DirectionAwareHover imageUrl={"/project/aion2-main.png"}>
                <p className="font-bold text-xl">Marketing Page</p>
                <p className="font-normal text-sm">AION2 런칭 페이지</p>
              </DirectionAwareHover>
              <DirectionAwareHover imageUrl={"/project/pre-order.png"}>
                <p className="font-bold text-xl">Pre-Order Page</p>
                <p className="font-normal text-sm">AION2 사전예약 페이지</p>
              </DirectionAwareHover>
            </div>
          </div>

          <div className="mt-12">
            <CompanyInfo
              company="DDD"
              logo="/ddd.jpeg"
              position="FE Organizer / Front * Server Developer"
              team="6-10기 (2021-2025)"
              description="DDD는 디자인, 개발이 성장하고 발전하는 열정적인 날들의 의미를 함축하고 있는 그룹으로, IT업계의 개발자와 디자이너들을 위한 모임입니다. 
              6-10기 FE Organizer로 근무하며 6-10기 프로젝트 개발 및 관리를 담당했습니다."
            />
            <div className="flex flex-col gap-2 mt-[-24px]">
              <p className="text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
                <span>
                  - DDD 8기 웹 3팀 : EXIT<TossfaceText>🔐</TossfaceText> - 방
                  탈출 카페정보 & 추천 서비스 FE 개발
                </span>{" "}
                <ExternalLink
                  href="https://github.com/DDD-Community/jsonWeb-front"
                  useFlipWords={true}
                />
              </p>

              <p className="text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
                <span>
                  - DDD 9기 웹 2팀 : Rainbow<TossfaceText>🌈</TossfaceText> -
                  지출 공유 서비스 FE 개발
                </span>{" "}
                <ExternalLink
                  href="https://github.com/DDD-Community/Rainbow-Web"
                  useFlipWords={true}
                />
              </p>
            </div>
          </div>

          <div className="mt-8">
            <CompanyInfo
              company="Depromeet"
              logo="/depromeet.png"
              position="Frontend Developer"
              team="11기 (2022-2023)"
              description="디프만 : 개발자 X 디자이너 간 연합 동아리로 11기 프로젝트 FE 개발을 담당했습니다."
            />
            <div className="flex flex-col gap-2 mt-[-24px]">
              <p className="text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
                <span>
                  - <TossfaceText>📈</TossfaceText> 개미는툰툰{" "}
                  <TossfaceText>🐜</TossfaceText> : 웹툰 독자를 위한 커뮤니티
                  플랫폼 FE 개발
                </span>{" "}
                <ExternalLink
                  href="https://github.com/depromeet/antoon-web"
                  useFlipWords={true}
                />
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <DirectionAwareHover imageUrl={"/project/antoon-main.gif"}>
              <p className="font-bold text-xl">Depromeet Project</p>
              <p className="font-normal text-sm">Antoon :: Webtoon Community</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={"/project/json-web.png"}>
              <p className="font-bold text-xl">DDD Project</p>
              <p className="font-normal text-sm">
                EXIT :: Excape Room Community
              </p>
            </DirectionAwareHover>
          </div>

          <div className="flex flex-col gap-2 mt-12">
            <p className="text-md font-normal text-neutral-200 md:text-md">
              <b>항해커톤 2024</b> <br />
              <code>
                <TossfaceText>🏆</TossfaceText> <b>최우수상</b> 수상
              </code>
            </p>
            <code className="text-sm">
              팩트체커(Fact Checker) :: 페이크 뉴스 탐지 서비스
            </code>
            <p className="text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
              <span>- News</span>{" "}
              <ExternalLink
                href="https://hanghae99.spartaclub.kr/blog/%EB%AC%B4%EB%B0%95-2%EC%9D%BC%EA%B0%84%EC%9D%98-%EC%97%B4%EC%A0%95%EC%9C%BC%EB%A1%9C-%ED%83%84%EC%83%9D%ED%95%9C-ai-%EC%84%9C%EB%B9%84%EC%8A%A4%EB%A5%BC-%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4--21990#%EC%B5%9C%EC%9A%B0%EC%88%98%EC%83%81_%ED%8E%98%EC%9D%B4%ED%81%AC_%EB%89%B4%EC%8A%A4_%ED%83%90%EC%A7%80_%EC%84%9C%EB%B9%84%EC%8A%A4_fact_checker_1"
                useFlipWords={true}
              />
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2020",
      content: (
        <div>
          <CompanyInfo
            company="IMBC"
            logo="/imbc.jpeg"
            position="Web Developer"
            team="시스템 개발팀"
            description="IMBC 시스템 개발팀에서 Web Developer로 근무하며 웹뷰 기반 OTT 서비스인 MBC 앱등 MBC 관련 서비스를 개발했습니다."
            techStack={["C#", ".NET", "Vue", "JavaScript", "SQL Server"]}
          />
          <p className="mb-4 text-md font-normal text-neutral-200 md:text-md">
            웹뷰 기반의 MBC 앱,Corp 페이지, MBC 아카이브, 미니등과 같은 서비스와
            다수의 선거,올림픽,TV 방송의 페이지 닷넷기반 BE,Vue 기반 FE 개발을
            맡았습니다.{" "}
            <ExternalLink
              href="https://play.google.com/store/apps/details?id=com.imbc.downloadapp&hl=ko"
              useFlipWords={true}
            />
          </p>

          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              ✅ MAU 10만+ 이상 서비스로 발전 (MBC앱)
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              ✅ C# .NET BE, Vue FE 개발
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              ✅ 사내 Jquery 레거시 Vue 마이그레이션 진행
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
              ✅ 각종 선거,올림픽,TV 방송의 페이지 개발
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <DirectionAwareHover imageUrl={"/project/mbc-app.png"}>
              <p className="font-bold text-xl">MBC OTT App Page</p>
              <p className="font-normal text-sm">MBC Webview App BE/FE</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={"/project/mbc-app3.jpeg"}>
              <p className="font-bold text-xl">MBC OTT APP Page</p>
              <p className="font-normal text-sm">MBC Webview App BE/FE</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={"/project/with-mbc.png"}>
              <p className="font-bold text-xl">With MBC Page</p>
              <p className="font-normal text-sm">C# .NET BE/FE</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={"/project/vote2.png"}>
              <p className="font-bold text-xl">Vote MBC Page</p>
              <p className="font-normal text-sm">2022 MBC 선거 페이지 BE/FE</p>
            </DirectionAwareHover>
          </div>

          <div className="mt-12">
            <CompanyInfo
              company="Azure Contributor"
              logo="/azure.png"
              position="Azure"
              team="azure-functions-openapi-extension"
            />
            <div className="flex flex-col gap-2 mt-[-24px]">
              <p className="text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
                <span>
                  - azure-functions-openapi-extension의 0.9.0 version 개발
                </span>{" "}
                <ExternalLink
                  href="https://github.com/Azure/azure-functions-openapi-extension"
                  useFlipWords={true}
                />
              </p>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
                ✅ 6 merge / 및 10개 issue complete
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
                ✅ 1778개의 Unit Test 추가 및 531개 통합테스트 추가
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300 md:text-base">
                ✅ Hacktoberfest 2021 참여 및 도전과제 완수(25 pull request / 12
                merge)
              </div>
            </div>
          </div>

          <div className="mt-12">
            <CompanyInfo
              company="Microsoft Contributor"
              logo="/microsoft.png"
              position="2021.12"
              team="Korean Translator"
            />
            <div className="flex flex-col gap-2 mt-[-24px]">
              <p className="text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
                <span>
                  Data-Science-For-Beginners 한국어 번역에 참여하였습니다.
                </span>
                <ExternalLink
                  href="https://github.com/microsoft/Data-Science-For-Beginners/pull/167"
                  useFlipWords={true}
                />
              </p>
            </div>
          </div>

          <div className="mt-12">
            <CompanyInfo
              company="2021 OpenSource Contribution"
              logo="/OSS.png"
              position="2021.07 - 2021.12"
              team="정보통신산업진흥원장상 수상"
              description="Azure Functions OpenAPI Extension 멘토링 프로젝트 리드 및 수상"
            />
            <div className="flex flex-col gap-2 mt-[-24px]">
              <p className="flex items-center gap-2 text-md font-normal text-neutral-200 md:text-md">
                <code>
                  <TossfaceText>🏆</TossfaceText> <b>정보통신산업진흥원장상</b>{" "}
                  수상
                </code>
                <ExternalLink
                  href="https://file.notion.so/f/f/7d919b60-5b1c-4539-ab7a-2fcf77912e4a/e4b4d2c2-5063-4567-9c0d-3fbf8b7cbb74/Azure_Functions_OpenAPI_Extension_Final_Presentation.pdf?table=block&id=0a3d2dc4-4ab1-4530-9c87-a89203209495&spaceId=7d919b60-5b1c-4539-ab7a-2fcf77912e4a&expirationTimestamp=1758636000000&signature=pbt3PyN1Eno1BmZ7otA29anvCgnpkt63aFjdmJia3ZM&downloadName=Azure_Functions_OpenAPI_Extension_Final_Presentation.pdf"
                  useFlipWords={true}
                />
              </p>
            </div>
          </div>

          <div className="mt-12">
            <CompanyInfo
              company="DDD"
              logo="/ddd.jpeg"
              position="FE Organizer / Front * Server Developer"
              team="6-10기 (2021-2025)"
              description="DDD는 디자인, 개발이 성장하고 발전하는 열정적인 날들의 의미를 함축하고 있는 그룹으로, IT업계의 개발자와 디자이너들을 위한 모임입니다. 
              6-10기 FE Organizer로 근무하며 6-10기 프로젝트 개발 및 관리를 담당했습니다."
            />
            <div className="flex flex-col gap-2 mt-[-24px]">
              <p className="text-sm font-normal text-neutral-800 md:text-sm dark:text-neutral-200 flex items-center gap-2">
                <span>
                  - DDD 6기: 공연 티켓 공유 서비스{" "}
                  <TossfaceText>🥨</TossfaceText> BE 개발
                </span>{" "}
                <ExternalLink
                  href="https://github.com/DDD-Community/CultureShock-Server"
                  useFlipWords={true}
                />
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <DirectionAwareHover imageUrl={"/project/ddd-culture.png"}>
              <p className="font-bold text-xl">DDD Project</p>
              <p className="font-normal text-sm">kotlin server 개발</p>
            </DirectionAwareHover>
            <DirectionAwareHover imageUrl={"/project/azure-0.9.png"}>
              <p className="font-bold text-xl">Azure Project</p>
              <p className="font-normal text-sm">0.9.0 version release</p>
            </DirectionAwareHover>
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2013",
      content: (
        <div>
          <div className="flex flex-col gap-2 mb-12">
            <p className="text-md font-normal text-neutral-200 md:text-md">
              <b>Australia Working Holiday</b> <br />
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                2016.02 -2016.09
              </p>
            </p>
          </div>
          <CompanyInfo
            company="SK 행복나눔재단"
            logo="/happy-logo.png"
            position="Intern"
            team="(2014.08 - 2015.02)"
            description="사내 사회 복지 프로그램을 지속적으로 관리하고 프로세스를 정비하는 일을 수행"
          />
          <CompanyInfo
            company="제 2회 SK 해피노베이터 "
            logo="/sk.png"
            position="나눔인재상 수상"
            team="2024.11"
            description="도전과 혁신으로 긍정적 사회변화를 주도하는 사회적 이슈 아이디어 제시"
            url="https://www.asiatoday.co.kr/kn/view.php?key=20140724010014207"
          />
          <CompanyInfo
            company="SK 10th Sunny"
            logo="/sk-sunny.jpg"
            position="Leader Group"
            team="(2013.12 - 2014.11)"
            description="SK행복나눔재단 자원봉사 리더그룹으로 1년여간 활동 "
          />

          <CompanyInfo
            company="Hanyang University"
            logo="/hanyang.png"
            position="정보사회학과 / 신산업 소프트웨어학과"
            team="(2013.03 - 2020.08)"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
