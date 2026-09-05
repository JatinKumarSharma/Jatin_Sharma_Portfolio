interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center items-center"
      : "items-start text-left";

  return (
    <div
      className={`flex max-w-2xl flex-col ${alignment}`}
    >
      {eyebrow && (
        <span className="mb-4 text-xs font-bold tracking-[0.22em] text-accent">
          {eyebrow}
        </span>
      )}

      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;