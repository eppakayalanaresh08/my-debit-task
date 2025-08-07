

import React from "react";
import classNames from "classnames";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Card = ({ className, ...props }: CardProps) => {
  return (
    <div
      className={classNames(
        "rounded-2xl border border-gray-200 bg-white p-6 shadow-sm",
        className
      )}
      {...props}
    />
  );
};

export const CardContent = ({ className, ...props }: CardProps) => {
  return (
    <div className={classNames("text-base text-gray-700", className)} {...props} />
  );
};
