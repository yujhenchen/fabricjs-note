import type { ReactNode } from "react";
import { Footer } from "../components/footer";

export const ContentContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 relative">{children}</main>
      <Footer />
    </div>
  );
};
