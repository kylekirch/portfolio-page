import type { Metadata } from "next";
import { Anton, Goldman, Iceland } from "next/font/google";
import "./globals.css";
import Navbar from "./components/kirchLib/Navbar";
import Footer from "./components/kirchLib/Footer";

const heading_Anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const sub_Revalia = Goldman({
  weight: "400",
  variable: "--font-goldman",
  subsets: ["latin"],
});

const body_Iceland = Iceland({
  weight: "400",
  variable: "--font-iceland",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "- Default kirchLib Layout -",
  description: "Library by Kyle Kirchgessner, began development 5/27/25",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading_Anton.variable} ${sub_Revalia.variable} ${body_Iceland.variable}`}>
        <Navbar 
            leftIcon={["/favicon.svg", "#"]} 
            leftText={["Shop", "#"]} 
            navbarTitle={["Kyle Kirchgessner", "#"]} 
            rightText={["Contact", "#"]} 
            rightIcon={["/favicon.svg", "https://kirch.wiki"]} 
            id={"defaultNavbar"}  
          /> 

        {children}

              <Footer   
          iconData= {[ 
            ["/favicon.svg", "https://x.com/="], 
            ["/favicon.svg", "https://instagram.com/"], 
            ["/favicon.svg", "https://github.com/"], 
            ["/favicon.svg", "https://linkedin.com/"] 
          ]} 
          hyperlinkData={[ 
                ["Legal", "#defaultFooter"], 
                ["Contact", "#defaultFooter"], 
                ["More", "#defaultFooter"] 
          ]} 
          descriptions={[ 
                "Copyright Kyle Kirchgessner", 
                "All rights reserved, 2025" 
          ]} 
          id={"defaultFooter"}  
      /> 
      </body>
    </html>
  );
}
