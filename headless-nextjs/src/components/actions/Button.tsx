"use client";
import { Enum_Componentelementsbutton_Style } from "@/graphql/generated/graphql";
import React from "react";

type Props = {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  variant?: "filled" | "outlined" | "text";
  style?: "primary" | "secondary";
  testId?: string;
};

const Button = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  fullWidth = true,
  isLoading = false,
  variant = "filled",
  style = "primary",
  testId = "button",
}: Props) => {
  return (
    <button
      data-test-id={testId}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`items-center rounded-md px-6 py-2 text-center text-base font-medium shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-gray-500
        ${
          style === "primary" &&
          variant === "filled" &&
          `bg-primary hover:bg-primary-light text-light`
        }
        ${
          style === "secondary" &&
          variant === "filled" &&
          `bg-secondary hover:bg-secondary-light text-light`
        }
        ${variant === "outlined" && "border"}
        ${
          style === "secondary" &&
          variant === "outlined" &&
          `border-secondary hover:bg-gray-50 dark:hover:bg-gray-900 text-dark dark:text-light`
        }
        ${
          style === "primary" &&
          variant === "outlined" &&
          `border-primary hover:bg-gray-50 dark:hover:bg-gray-900 text-dark dark:text-light`
        }

      `}

      //   twMerge(
      //   cn("btn", {
      //     "items-center px-6 text-center text-base font-medium shadow-sm focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-gray-500":
      //       true,
      //     "bg-gray-500 text-gray-300": disabled,
      //     "btn-default":
      //       !disabled && !Boolean(className) && style === "default",
      //     "border border-transparent": style === "default",
      //     border: style === "outlined",
      //     "btn-outlined": style === "outlined",
      //     "border-gray-900 hover:bg-gray-50":
      //       !Boolean(className) && style === "outlined",
      //     "py-3": variation !== "dense",
      //     "py-2": variation === "dense",
      //     ["w-full"]: fullWidth,
      //     [className]: Boolean(className),
      //   })
      // )}
    >
      <div className="flex justify-center items-center">
        {isLoading && (
          <div className="inline-block mr-4">
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-purple-100" />
          </div>
        )}
        <>{children}</>
      </div>
    </button>
  );
};

export { Button };
