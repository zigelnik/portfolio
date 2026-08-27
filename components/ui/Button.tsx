import { type AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "solid" | "ghost";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

export function ButtonLink({
  variant = "solid",
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bio-glow",
        variant === "solid" &&
          "bg-bio-glow text-abyssal-black hover:shadow-[0_0_24px_var(--bio-glow)]",
        variant === "ghost" &&
          "border border-current/25 text-[var(--depth-fg)] hover:border-bio-glow hover:text-bio-glow",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
