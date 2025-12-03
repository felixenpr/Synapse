import * as React from "react";

const Button = React.forwardRef(
  ({ className, size = "md", variant = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const sizeStyles =
      {
        sm: "h-9 px-3",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-8",
        icon: "h-10 w-10"
      }[size] || "h-10 px-4 py-2";

    const variantStyles =
      {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      }[variant] || "bg-primary text-primary-foreground hover:bg-primary/90";

    return (
      <button
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${
          className || ""
        }`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
