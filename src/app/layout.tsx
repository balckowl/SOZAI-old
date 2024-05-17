import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { UIProvider } from "@yamada-ui/react";
import Header from "@/app/components/Header/Headar"
import Footer from "./components/Footer/Footer";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansJP.className}>
        <UIProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
