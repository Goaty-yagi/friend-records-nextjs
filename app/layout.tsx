import { ChakraProviders } from "./providers";
import Navbar from "@/components/common/navbar";
import Provider from "@/redux/provider";
import Layout from "@/components/common/layout";
import { Setup, Throttle } from "@/components/utils";
import LayoutWrapper from "./layoutWrapper";
import { ThrottleAlert } from "@/components/alerts";
import { Metadata } from "next";

export const metadata: Metadata = {
  viewport: {
    width: 'width=device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
