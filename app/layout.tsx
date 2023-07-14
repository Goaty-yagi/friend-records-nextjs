import { ChakraProviders } from "./providers";
import Navbar from "@/components/common/navbar";
import Provider from "@/redux/provider";
import Layout from "@/components/common/layout";
import { Setup, Throttle } from "@/components/utils";
import LayoutWrapper from "./layoutWrapper";
import { ThrottleAlert } from "@/components/alerts";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{overflow:'hidden'}}>
        <Provider>
          <Setup />
          <ChakraProviders>
            <div style={{ width: "100vw" }}>
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
