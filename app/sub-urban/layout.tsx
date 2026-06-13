import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sub Urban — Tonight at The Mezzanine, Tooting Market",
  description:
    "Free entry. Tonight. 9pm–2am. The Mezzanine, Tooting Market, London.",
};

export default function SubUrbanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
