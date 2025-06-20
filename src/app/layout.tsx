import type { Metadata } from "next";
import { Anton, Goldman, Iceland } from "next/font/google";
import "./globals.css";
import Navbar from "./components/blocKit/Navbar";
import Footer from "./components/blocKit/Footer";
import styles from "./page.module.css";


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
            navbarTitle={[' ']}
            leftText={['Resume ⤓', '#projectTarget']}
            rightText={['Contact', '#contactTarget']}
            id={"mainNavbar"}
          />
      <div className={styles.section} id={styles.navSection}>
        
      </div>
      {children}
      <div className={styles.section} id={styles.footerSection}>
        <Footer   
            iconData= {[ 
              ["/icon_x.svg", "https://x.com/"], 
              ["/icon_insta.svg", "https://instagram.com/"], 
              ["/icon_github.svg", "https://github.com/"], 
              ["/icon_linkedin.svg", "https://linkedin.com/"] 
            ]} 
            hyperlinkData={[ 
                  ["Legal", "#defaultFooter"], 
                  ["Contact", "#contact"], 
                  ["Resume", "#"] 
            ]} 
            descriptions={[ 
                  "Copyright Kyle Kirchgessner", 
                  "All rights reserved, 2025" 
            ]} 
            id={"mainFooter"}  
          />
      </div>
      </body>
    </html>
  );
}
