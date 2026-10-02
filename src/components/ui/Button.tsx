type ButtonProps = {
  children: string;
  variant?: "primary" | "secondary";
  className?: string;
} & (
  | { href: string; type?: never }
  | { href?: never; type: "submit" | "button" }
);

/** Gold outlined/filled button with the rolling double-text hover effect. */
export default function Button({ children, variant = "primary", className = "", href, type }: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`.trim();
  const content = (
    <>
      <span className="text text-1">{children}</span>
      <span className="text text-2" aria-hidden="true">{children}</span>
    </>
  );

  if (href !== undefined) {
    return <a href={href} className={classes}>{content}</a>;
  }

  return <button type={type} className={classes}>{content}</button>;
}
