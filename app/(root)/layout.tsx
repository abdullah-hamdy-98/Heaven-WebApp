import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import Topbar from "@/components/shared/Topbar";

export const metadata: Metadata = {
  title: "Heaven",
  description: "Comming soon",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <main className="flex flex-col">
          <section className="main-container bg-light-3">

            {children}

          </section>
        </main>

      </body>
    </html>

  );
}
