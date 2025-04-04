import Footer from "@/components/features/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/constants";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "@/components/features/theme-switcher";
import Script from "next/script";
import DarkReaderFix from "@/components/features/darkreader-fix";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: `Engineer Diary Blog with ${CMS_NAME}`,
  description: `A statically generated engineer diary blog using ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock" content="true" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        
        <Script id="cleanup-extension-attributes" strategy="beforeInteractive">
          {`
            (function() {
              function cleanupExtensionAttributes() {
                try {
                  const elements = document.querySelectorAll('[data-darkreader-inline-color]');
                  elements.forEach(el => {
                    el.removeAttribute('data-darkreader-inline-color');
                    if (el.style && el.style.cssText.includes('--darkreader-inline-color')) {
                      el.style.cssText = el.style.cssText.replace(/--darkreader-inline-color:[^;]+;?/g, '');
                    }
                  });
                } catch (e) {
                  console.error('Cleanup failed:', e);
                }
              }
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', cleanupExtensionAttributes);
              } else {
                cleanupExtensionAttributes();
              }
            })();
          `}
        </Script>
      </head>
      <body className={cn(
        inter.variable, 
        montserrat.variable, 
        inter.className, 
        "min-h-screen antialiased"
      )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DarkReaderFix />
          <ThemeSwitcher />
          <div className="flex min-h-screen flex-col">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
