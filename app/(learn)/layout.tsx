import type { Metadata } from "next";
import LearnNavbar from "@/components/learn/navbar";
import LearnFooter from "@/components/learn/footer";

export const metadata: Metadata = {
  title: { default: "Praxis Learn", template: "%s | Praxis Learn" },
  description: "Master your skills. Watch expert-led video courses, earn certificates, and join a thriving community — all in one place.",
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LearnNavbar />
      <main className="flex-1">{children}</main>
      <LearnFooter />
    </div>
  );
}
