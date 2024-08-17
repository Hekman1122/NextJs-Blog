import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "喵克部落格",
  description:
    "這個部落格是我的旅行紀錄和分享，希望能啟發他人一同探索城市和鄉村之美，並體驗不同文化的奇妙之處。",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          <div className="container">{children}</div>
        </div>
      </body>
    </html>
  );
}
