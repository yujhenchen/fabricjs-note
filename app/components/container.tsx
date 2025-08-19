import type { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => (
  <div className="h-screen flex flex-col container mx-auto px-4">{children}</div>
);
