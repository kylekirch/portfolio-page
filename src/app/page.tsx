import styles from "./page.module.css";
import Navbar from "./components/blocKit/Navbar";
import CardDeck from "./components/blocKit/CardDeck";
import Carousel from "./components/blocKit/Carousel";
import ContactForm from "./components/blocKit/ContactForm";
import MainTitle from "./components/blocKit/MainTitle";
import Subtitle from "./components/blocKit/Subtitle";
import Description from "./components/blocKit/Description";
import Hyperlink from "./components/blocKit/Hyperlink";
import Footer from "./components/blocKit/Footer";
import * as dotenv from 'dotenv';

export default function Home() {
  dotenv.config();
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID? 
                                      process.env.REACT_APP_EMAILJS_USER_ID
                                      :
                                      'ERROR';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID? 
                                      process.env.REACT_APP_EMAILJS_TEMPLATE_ID
                                      :
                                      'ERROR';
  const imgSrc="/favicon.svg";
  return (
    <div className={styles.main}>
      <div className={styles.section} id={styles.heroSection}>
        
      </div>
      <div className={styles.section} id={styles.projectSection}>
        
      </div>
      <div className={styles.section} id={styles.contactSection}>
        
      </div>
      <div className={styles.section} id={styles.referenceSection}>
        
      </div>
      <div className={styles.section} id={styles.teamworkSection}>
        
      </div>
      <div className={styles.section} id={styles.creditSection}>
        
      </div>
      <div className={styles.section} id={styles.footerSection}>
        
      </div>
    </div>
  );
}
