import { ReactNode } from "react";

export const InputTextWrapper = ({ children, className }: { children: ReactNode; className: string }) => {
  return <p className={className}>{children}</p>;
};
