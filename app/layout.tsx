import { ChakraProviders } from "./providers";
import Navbar from "@/components/common/navbar";
import Provider from "@/redux/provider";
import Layout from "@/components/common/layout";
import { Setup, Throttle } from "@/components/utils";
import LayoutWrapper from "./layoutWrapper";
import { ThrottleAlert } from "@/components/alerts";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  viewport: {
    width: "width=device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
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
        <Script id="google-analycs" strategy="afterInteractive">
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
