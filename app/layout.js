import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { auth } from "@clerk/nextjs";
import Navbar from "./(components)/Navbar/Navbar";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Navigator from "./(components)/Navigator/Navigator";
import ContextApi, { context } from "./(components)/context/ContextApi";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wonder Share",
  description: "share and discover",
};

export default function RootLayout({ children }) {
  const { userId } = auth();
  return (
    <ClerkProvider>
      <ContextApi>
        <html lang="en">
          <body className={inter.className}>
            <div className="w-full h-full">
              <div className="w-full h-[80px] px-5 ">
                {userId && <Navbar />}
              </div>
              <div className="w-full h-[calc(100%-80px)] flex flex-col items-center p-2">
                {userId && <Navigator />}

                {children}
              </div>
            </div>
          </body>
        </html>
      </ContextApi>
    </ClerkProvider>
  );
}
