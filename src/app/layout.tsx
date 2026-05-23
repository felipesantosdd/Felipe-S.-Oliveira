import type { Metadata } from "next";
import { Inter, Space_Grotesk, Major_Mono_Display, JetBrains_Mono } from "next/font/google";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import GlobalStyles from "@/styles/GlobalStyles";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const majorMono = Major_Mono_Display({
  variable: "--font-major-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Felipe Oliveira — Portfolio",
  description: "Portfolio de Felipe Oliveira, desenvolvedor full stack sênior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${majorMono.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
