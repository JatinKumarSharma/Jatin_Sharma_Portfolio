import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-light hover:-translate-y-0.5",

    secondary:
      "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;