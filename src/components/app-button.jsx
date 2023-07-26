import { Button } from "@chakra-ui/button";
import cx from "classnames";
import React from "react";

const AppButton = ({
  size,
  children,
  className,
  leftIcon,
  rightIcon,
  variant = "solid" | "link",
  onClick,
  type,
  fullWidth = false,
}) => {
  return (
    <>
      <Button
        variant={variant}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        onClick={onClick}
        type={type}
        className={cx(
          "font-inter font-semibold",
          {
            "px-6 py-3": size === "sm",
            "px-8 py-3": size === "md",
            "px-10 py-2": size === "lg",
            "px-12 py-5": size === "xl",
          },
          className
        )}
      >
        {children}
      </Button>
    </>
  );
};

export default AppButton;
