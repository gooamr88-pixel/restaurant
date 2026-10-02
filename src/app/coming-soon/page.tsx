import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon/ComingSoon";

export const metadata: Metadata = {
  title: "Grilli - Coming Soon",
  description: "Grilli restaurant is opening soon. Get notified on launch day.",
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
