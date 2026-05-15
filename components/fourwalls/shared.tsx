import type { ReactNode } from "react";

type WithChildren = {
  children: ReactNode;
};

type ContainerProps = WithChildren & {
  className?: string;
};

type SectionTagProps = WithChildren & {
  light?: boolean;
  centered?: boolean;
  noLine?: boolean;
};

type SectionHeadingProps = WithChildren & {
  light?: boolean;
  className?: string;
};

type BodyTextProps = WithChildren & {
  light?: boolean;
  className?: string;
};

type ArrowLinkProps = WithChildren & {
  href: string;
  className?: string;
};

type ButtonProps = WithChildren & {
  href: string;
  variant?: "yellow" | "ghostLight" | "ghostDark" | "navy";
  className?: string;
};

type LogoMarkProps = {
  size?: number;
  dark?: boolean;
};

export function Container({ className = "", children }: ContainerProps) {
  return <div className={`mx-auto max-w-[1280px] px-5 md:px-10 ${className}`}>{children}</div>;
}

export function SectionTag({
  children,
  light = false,
  centered = false,
  noLine = false
}: SectionTagProps) {
  return (
    <p
      className={[
        "mb-4 inline-flex items-center gap-[0.55rem] text-[0.68rem] font-semibold uppercase tracking-[0.22em]",
        light ? "text-[#01c1ff]" : "text-[#01c1ff]",
        centered ? "justify-center" : "",
        noLine ? "" : "before:block before:h-[2px] before:w-[22px] before:flex-shrink-0 before:bg-[#01c1ff]",
      ].join(" ")}
    >
      {children}
    </p>
  );
}

export function SectionHeading({ children, light = false, className = "" }: SectionHeadingProps) {
  return (
    <h2
      className={`font-[var(--font-outfit)] text-[clamp(2.1rem,3.5vw,3.2rem)] font-bold leading-[1.12] ${
        light ? "text-white" : "text-[#012c3d]"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export function BodyText({ children, light = false, className = "" }: BodyTextProps) {
  return (
    <p
      className={`max-w-[520px] text-[0.97rem] font-light leading-[1.82] ${
        light ? "text-white/45" : "text-[#5f8a9f]"
      } ${className}`}
    >
      {children}
    </p>
  );
}

export function ArrowLink({ href, children, className = "" }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#01c1ff] transition-all duration-200 ${className}`}
    >
      {children}
    </a>
  );
}

export function Button({ href, children, variant = "yellow", className = "" }: ButtonProps) {
  const variants = {
    yellow: "bg-[#ffc309] text-[#012c3d]",
    ghostLight: "border border-[#01c1ff66] bg-transparent text-[#01c1ff]",
    ghostDark: "border border-[#012c3d4d] bg-transparent text-[#012c3d]",
    navy: "bg-[#012c3d] text-white"
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-[6px] px-8 py-3 text-[0.84rem] font-semibold tracking-[0.06em] transition-all duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export function LogoMark({ size = 24, dark = true }: LogoMarkProps) {
  const fill = dark ? "#012c3d" : "#ffffff";

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 9L12 3L21 9V21H15V15H9V21H3V9Z"
        fill={fill}
        stroke={fill}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
