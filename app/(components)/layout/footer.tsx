import { TossfaceText } from "../common/tossface-text";
import { ExternalLink } from "../common/external-link";
import { SiGithub, SiGmail, SiNotion } from "react-icons/si";
import { getCurrentYear } from "@/lib/utils";

const CONTACT_INFO = {
  title: "Contact Me",
  emoji: "📡",
  copyright: "최푸름",
} as const;

const SOCIAL_LINKS = [
  {
    href: "https://github.com/choipureum",
    icon: SiGithub,
    label: "GitHub",
  },
  {
    href: "mailto:pooreumsunny@gmail.com",
    icon: SiGmail,
    label: "Email",
  },
  {
    href: "https://ten-confidence-178.notion.site/Choi-Pu-Reum-e987869165e74e31905573f2b88613ad",
    icon: SiNotion,
    label: "Notion",
  },
] as const;

const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) => (
  <ExternalLink
    href={href}
    className="flex items-center gap-2 text-neutral-300 hover:text-neutral-500 transition-colors"
    showIcon={false}
  >
    <Icon className="w-6 h-6" />
    <span className="text-sm font-medium">{label}</span>
  </ExternalLink>
);

const Copyright = () => (
  <div className="mt-8 pt-4 border-neutral-700">
    <div className="text-center">
      <p className="text-md text-neutral-400">
        © {getCurrentYear()} {CONTACT_INFO.copyright}. All rights reserved.
      </p>
    </div>
  </div>
);

export default function Footer() {
  return (
    <div
      id="about"
      data-section="about"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
    >
      <div className="text-center">
        <div className="flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-200">
            {CONTACT_INFO.title}{" "}
            <TossfaceText>{CONTACT_INFO.emoji}</TossfaceText>
          </div>
        </div>
        <div className="flex justify-center items-center px-4 mt-12 gap-6">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </div>
      </div>

      <Copyright />
    </div>
  );
}
