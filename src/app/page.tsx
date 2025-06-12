import styles from "./page.module.css";
import CardDeck from "./components/blocKit/CardDeck";
import Carousel from "./components/blocKit/Carousel";
import ContactForm from "./components/blocKit/ContactForm";
import MainTitle from "./components/blocKit/MainTitle";
import Subtitle from "./components/blocKit/Subtitle";
import Description from "./components/blocKit/Description";
import Hyperlink from "./components/blocKit/Hyperlink";

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
      <div className={styles.titleSection}>
        <Subtitle text="Portfolio - Made with Next.js" id="underlined"/>
        <Hyperlink text="Docs" href="https://kirch.wiki"/>
      </div>
      <CardDeck  
          deckTitle={"About Myself"} 
          cardData={[ 
            ["Trait", 
            "This is why the trait aligns with me." 
            ], 
            ["Trait", 
            "This is why the trait aligns with me." 
            ], 
            ["Trait", 
            "This is why the trait aligns with me." 
            ], 
          ]} 
          id={"defaultDeck"}  
      /> 
      <Carousel    
          numModals={3} 
          modalData={[ 
            ["-Project 1-",
              "My first project",
              imgSrc,
              "#"],
            ["-Project 2-",
              "My second project",
              imgSrc,
              "#"],
            ["-Project 3-",
              "My third project",
              imgSrc,
              "#"]
          ]} 
      /> 
      <ContactForm EMAILJS_KEY={EMAILJS_USER_ID} TEMPLATE_ID={EMAILJS_TEMPLATE_ID}/> 
    </div>
  );
}
