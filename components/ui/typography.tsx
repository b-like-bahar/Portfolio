import { cn } from "@/lib/utils";
import React from "react";
import { Slot } from "@radix-ui/react-slot";

export type TextSize = "xs" | "sm" | "md" | "lg";
export type TextWeight =
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold";
export type TextVariant = "default" | "muted";

type TextProps = {
  size?: TextSize;
  weight?: TextWeight;
  variant?: TextVariant;
  asChild?: boolean;
  as?: "p" | "span" | "div" | "label";
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Text: React.FC<TextProps> = ({
  children,
  className,
  size = "md",
  weight = "normal",
  variant = "default",
  asChild = false,
  as = "p",
  ...props
}) => {
  const TextComponent = asChild ? Slot : as;

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base md:text-lg",
    lg: "text-lg md:text-xl",
  };

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const lineHeightClasses = {
    xs: "leading-snug",
    sm: "leading-snug",
    md: "leading-relaxed",
    lg: "leading-relaxed",
  };

  const variantClasses = {
    default: "text-[#E5E7EB]",
    muted: "text-[#9CA3AF]",
  };

  return (
    <TextComponent
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        lineHeightClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </TextComponent>
  );
};

export const Heading1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => (
  <h1
    className={cn(
      "text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#E5E7EB]",
      className
    )}
    {...props}
  >
    {children}
  </h1>
);

export const Heading2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => (
  <h2
    className={cn(
      "text-2xl md:text-4xl font-semibold tracking-tight leading-snug text-[#E5E7EB]",
      className
    )}
    {...props}
  >
    {children}
  </h2>
);

export const Heading3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => (
  <h3
    className={cn(
      "text-xl md:text-3xl font-semibold tracking-tight leading-snug text-[#E5E7EB]",
      className
    )}
    {...props}
  >
    {children}
  </h3>
);

export const Heading4: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => (
  <h4
    className={cn(
      "text-lg md:text-2xl font-semibold leading-snug text-[#E5E7EB]",
      className
    )}
    {...props}
  >
    {children}
  </h4>
);

export const Blockquote: React.FC<React.HTMLAttributes<HTMLQuoteElement>> = ({
  children,
  className,
  ...props
}) => (
  <blockquote
    className={cn("mt-6 border-l-2 pl-6 italic", className)}
    {...props}
  >
    {children}
  </blockquote>
);

export const UnorderedList: React.FC<
  React.HTMLAttributes<HTMLUListElement>
> = ({ children, className, ...props }) => (
  <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...props}>
    {children}
  </ul>
);

export const OrderedList: React.FC<React.HTMLAttributes<HTMLOListElement>> = ({
  children,
  className,
  ...props
}) => (
  <ol
    className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}
    {...props}
  >
    {children}
  </ol>
);

export const CodeSnippet: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => (
  <code
    className={cn(
      "rounded bg-[#111827] px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-[#E5E7EB]",
      className
    )}
    {...props}
  >
    {children}
  </code>
);
