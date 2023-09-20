import { ChakraProviders } from "./providers";
import Navbar from "@/components/common/navbar";
import Provider from "@/redux/provider";
import Layout from "@/components/common/layout";
import { Setup, Throttle } from "@/components/utils";
import LayoutWrapper from "./layoutWrapper";
import { ThrottleAlert } from "@/components/alerts";
import Script from "next/script";
import { Metadata } from "next";

const description = "Friend record App";
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: {
    default: process.env.APP_NAME!,
    template: `%s | ${process.env.APP_NAME!}`,
  },
  manifest:'/manifest.json',
  description: description,
  twitter: {
    card: "summary_large_image",
    title: process.env.APP_NAME!,
    description: description,
    siteId: "1467726470533754880",
    creator: "@nobuhiro",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    userScalable:false,
    viewportFit: "cover",
  },
  themeColor: 'black',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JDR4E6MDQ6"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JDR4E6MDQ6');
            `}
        </Script>
        <Provider>
          <Setup />
          <ChakraProviders>
            <div className="safe-area" style={{ width: "100vw" }}>
              <Navbar />
              <LayoutWrapper>
                <Layout>
                  {children}
                  <ThrottleAlert />
                </Layout>
              </LayoutWrapper>
            </div>
          </ChakraProviders>
        </Provider>
      </body>
    </html>
  );
}
