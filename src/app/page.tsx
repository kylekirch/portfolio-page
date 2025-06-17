import styles from "./page.module.css";
import Navbar from "./components/blocKit/Navbar";
import CardDeck from "./components/blocKit/CardDeck";
import Card from "./components/blocKit/Card";
import Carousel from "./components/blocKit/Carousel";
import ContactForm from "./components/blocKit/ContactForm";
import MainTitle from "./components/blocKit/MainTitle";
import Subtitle from "./components/blocKit/Subtitle";
import Description from "./components/blocKit/Description";
import Hyperlink from "./components/blocKit/Hyperlink";
import Footer from "./components/blocKit/Footer";
import Image from "next/image";
import * as dotenv from 'dotenv';
import IconBelt from "./components/blocKit/IconBelt";
import MainButton from "./components/blocKit/MainButton";

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
        <MainTitle text="What I Believe:" id={styles.heroTitle}/>
        <Image 
              src={"/headshot.svg"} 
              alt={"Hero-Headshot"}
              height={250} 
              width={250}
              id={styles.heroImg}
          />
        <CardDeck id={styles.heroInfo}>
          <Card >
            <Subtitle text="Reliable software is usable software." />
          </Card>
          <Card >
            <Subtitle text="Agile methodologies are essential for creating reliable software." />
          </Card>
          <Card >
            <Subtitle text="Clear requirements foster a productive development environment." />
          </Card>
        </CardDeck>
      <br id="projectTarget"/><br/>
      </div>
      <div className={styles.section} id={styles.projectSection}>
        <MainTitle text="My Projects" id={styles.projectTitle}/>
        <Carousel 
                numModals={5}
                modalData={[["Lexical Analyzer", 
                            "Built in C alongside a custom syntax parser. Designed to tokenize and classify input according to a defined grammar—laying the foundation for compiler construction.", 
                            "favicon.svg", 
                            "#projectSection"],
                            ["Fishing Condition Calculator", 
                            "Python-based data analysis tool that combines pandas for data storage, NumPy and scikit-learn for statistical modeling, and matplotlib for weather-based data visualization.", 
                            "favicon.svg", 
                            "#projectSection"],
                            ["Cellular Evolution Simulator", 
                            "Simulates millions of cellular lifecycles using Python's threading library, deployed on the Texas Tech HPCC. Explores performance tradeoffs between cores and processes through high-volume parallelization.", 
                            "favicon.svg", 
                            "#projectSection"],
                            ["MDP Solver",
                            "Implements three MDP-based maze-solving strategies: BFS, A*, and a stochastic policy-based method. Developed in Python (.ipynb) to explore decision-making under uncertainty.",
                            "favicon.svg",
                            "#projectSection"
                            ],
                            ["BlocKit", 
                            "A custom-built, modular React component library. Engineered in TypeScript for performance, documentation clarity, and ease of integration across frontend applications.",
                            "favicon.svg", 
                            "#projectSection"]
                            ]}
                id={styles.projectCarousel} 
            />
      </div>
      <div className={styles.section} id={styles.creditSection}>
        <MainTitle text="Language Skills" id={styles.creditTitle}/>
        <div id={styles.creditInfo}>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle text="Python"/>
                <Image src={"/icon_python.svg"} alt={"Python-Icon"} width={150} height={150}/>
                <Description fontSize="28px" text="A cornerstone of my data science and systems programming work." />
              </Card>
                <Card header="Multithreading" >
                <Description fontSize="24px" text="Leveraged Python's threading module for parallel processing of large-scale cellular simulations." />
                </Card>
                <Card header="Pandas" >
                <Description fontSize="24px" text="Used DataFrames to structure and manage data pipelines, including live NOAA weather data feeds." />
                </Card>
                <Card header="NumPy" >
                <Description fontSize="24px" text="Employed for efficient broadcasting and manipulation of multidimensional arrays—essential for large-state MDP problems." />
                </Card>
                <Card header="Scikit-learn" >
                <Description fontSize="24px" text="Applied regression models to identify predictive features in time-series weather data and consumption patterns." />
                </Card>
            </CardDeck>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle text="C"/>
                <Image src={"/icon_c.svg"} alt={"C-Language-Icon"} width={150} height={150}/>
                <Description fontSize="28px" text="Developed performance-critical applications and systems on Texas Tech University's High Performance Computing Cluster." />
              </Card>
                <Card header="TTU HPCC" >
                <Description fontSize="24px" text="Built C projects using Makefiles and remote execution via SSH. Gained experience with HPC resource management and Bash scripting." />
                </Card> 
                <Card header="Complexity Analysis" >
                <Description fontSize="24px" text="Crafted custom data structures with fine-grained pointer logic, allowing deep optimization of algorithmic performance." />
                </Card>
                <Card header="Vim" >
                <Description fontSize="24px" text="Wrote and managed all C code exclusively using Vim within the Cygwin environment—embracing efficiency and keyboard-centric workflows." />
                </Card>
            </CardDeck>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle text="JavaScript / TypeScript"/>
                <Image src={"/icon_javascript.svg"} alt={"Javascript-Icon"} width={150} height={150}/>
                <Description fontSize="28px" text="Focused on frontend development with a strong emphasis on type safety and modular design." />
              </Card>
                <Card header="ReactJS (Next.js)" >
                <Description fontSize="24px" text="Built and deployed responsive web apps, including this portfolio site, using React and the Next.js framework."/>
                </Card>
                <Card header="TypeScript" >
                <Description fontSize="24px" text="Preferred language for frontend development—offers clear type constraints that reduce runtime errors and aid scalability." />
                </Card>
                <Card header="Prisma" >
                <Description fontSize="24px" text="Engineered a custom API layer with Prisma + Railway, integrated with Postman for testing. Handled database CRUD operations, cart caching, and authentication logic in an ecommerce app." />
                </Card>
            </CardDeck>
            <MainButton text="Full CV (.pdf) ⤓" />
            {/* For future implementation
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle text="Java"/>
                <Image src={"/icon_java.svg"} alt={"Java-Icon"} width={150} height={150}/>
              </Card>
                <Card header="Multithreading" >
                <Description fontSize="24px" text="Very familiar with the core Java language constructs. One of my more studied languages, resulting in multiple technical certifications" />
                </Card>
                <Card header="Pandas" >
                <Description fontSize="24px" text="" />
                </Card>
                <Card header="NumPy" >
                <Description fontSize="24px" text="" />
                </Card>
                <Card header="Scikit" >
                <Description fontSize="24px" text="" />
                </Card>
            </CardDeck>
            */}
        </div>
      </div>
      <div className={styles.section} id={styles.creditSection}>
        <MainTitle text="Capabilities" id={styles.creditTitle}/>
        <div id={styles.creditInfo}>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle text="Tools"/>
                <Image src={"/icon_tools.svg"} alt={"Tools-Icon"} width={150} height={150}/>
              </Card>
                <Card header="Git (Version Control)" >
                <Description fontSize="24px" text="Daily user of Git for source control and collaboration. All active projects are tracked through Git and hosted on GitHub. Fluent in key commands and branching strategies." />
                </Card>
                <Card header="Requirements Engineering" >
                <Description fontSize="24px" text="Experienced in requirement elicitation and specification. Focused on reducing ambiguity early in the development lifecycle through structured interviews, user stories, and formal documentation." />
                </Card>
                <Card header="Agile & DevOps Practices" >
                <Description fontSize="24px" text="Familiar with iterative development using Scrum and Extreme Programming (XP) methodologies. Exposure to continuous integration and deployment workflows (CI/CD) and the cultural principles behind effective DevOps teams." />
                </Card>
            </CardDeck>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle text="Accomplishments" />
                <Image src={"/icon_awards.svg"} alt={"Awards-Icon"} width={150} height={150}/>
              </Card>
                <Card header="B.S. in Computer Science" >
                <Description fontSize="24px" text="Texas Tech University | Expected Graduation: December 2025" />
                </Card>
                <Card header="Professional Certifications" id={styles.certification}>
                <div className={styles.certificationInfo}>
                  <Subtitle fontSize="18" text="Responsive Web Development" />
                  <Description fontSize="24px" text="FreeCodeCamp" />
                </div>
                <div className={styles.certificationInfo}>
                  <Subtitle fontSize="18" text="DevOps Practices" />
                  <Description fontSize="24px" text="Coursera" />
                </div>
                <div className={styles.certificationInfo}>
                  <Subtitle fontSize="18" text="Java Advanced Programmer" />
                  <Description fontSize="24px" text="Precision Exams - Exam XXX" />
                </div>
                </Card>
                <Card header="Presidential Merit Scholar" >
                <Description fontSize="24px" text="Recognized by Texas Tech University for for exceptional academic achievements and leadership qualities" />
                </Card>
            </CardDeck>
        </div>
        <br id="contactTarget"/><br/><br/>
      </div>
      <div className={styles.section} id={styles.contactSection}>
        <MainTitle text="Reach Out" id={styles.contactTitle}/>
        <ContactForm 
                EMAILJS_KEY={EMAILJS_USER_ID} 
                TEMPLATE_ID={EMAILJS_TEMPLATE_ID} 
                id={styles.contactForm}
          />
      </div>

      
    </div>
  );
}
