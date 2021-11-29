import classNameProp from "class-name-prop";
import React from "react";

const Button = React.forwardRef(({ disabled, className, ...props }, ref) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return React.createElement("button", {
    className: classNameProp("daui-Button", className),
    disabled: disabled || !isMounted,
    ...props,
    ref,
  });
});

if (typeof process === "object" && process.env.NODE_ENV !== "production")
  Button.displayName = "Button";

export default Button;
