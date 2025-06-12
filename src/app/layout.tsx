import type { Metadata } from "next";
import { Anton, Goldman, Iceland } from "next/font/google";
import "./globals.css";
import Navbar from "./components/blocKit/Navbar";
import Footer from "./components/blocKit/Footer";

/* Component imports */
import Icon from "./components/blocKit/Icon";
import MainTitle from "./components/blocKit/MainTitle";
import Description from "./components/blocKit/Description";
import Subtitle from "./components/blocKit/Subtitle";

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
  title: "Kyle Kirchgessner - Portfolio",
  description: "A webpage dedicated to displaying my personal achievements and curriculum vitae",
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
            leftIcon={["/favicon.svg"
              , "#"]} 
            leftText={["Shop", "#"]} 
            navbarTitle={["", "#"]} 
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
