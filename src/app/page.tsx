import styles from "./page.module.css";
import CardDeck from "./components/kirchLib/CardDeck";
import Carousel from "./components/kirchLib/Carousel";
import ContactForm from "./components/kirchLib/ContactForm";
import MainTitle from "./components/kirchLib/MainTitle";
import Subtitle from "./components/kirchLib/Subtitle";
import Description from "./components/kirchLib/Description";
import Hyperlink from "./components/kirchLib/Hyperlink";

export default function Home() {
  const imgSrc="/favicon.svg";
  return (
    <div className={styles.main}>
      <div className={styles.titleSection}>
        <Subtitle subText="Portfolio - Made with Next.js" id="underlined"/>
        <Hyperlink linkText="Docs" href="https://kirch.wiki"/>
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
      <ContactForm   
          fields={[ 
            ["Name", "text", "name"], 
            ["Email", "email", "email"], 
            ["Message", "textarea", "message"], 
          ]} 
          buttonText={"Send"} 
          id={"defaultForm"}  
      /> 
    </div>
  );
}
