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
            <Subtitle text="Reliable software is useable software." />
          </Card>
          <Card >
            <Subtitle text="Agile methodologies are key to creating reliable software." />
          </Card>
          <Card >
            <Subtitle text="Unambiguous requirements create an inviting development environment." />
          </Card>
        </CardDeck>
      <br id="projectTarget"/><br/>
      </div>
      <div className={styles.section} id={styles.projectSection}>
        <MainTitle text="My Projects" id={styles.projectTitle}/>
        <Carousel 
                numModals={5}
                modalData={[["Lexical Analyzer", 
                            "Made alongside a custom syntax parser, written in C", 
                            "favicon.svg", 
                            "#projectSection"],
                            ["Fishing Condition Calculator", 
                            "Made using numerous Python data analysis libraries. Including pandas for data storage, " +
                            "Numpy and Scikit for statistical analysis, and matplotlib for visualization", 
                            "favicon.svg", 
                            "#projectSection"],
                            ["Cellular Evolution Simulator", 
                            "Implemented using Python's Multithread library on the Texas Tech University HPCC. The program simulated millions of cellular lifecycle iterations and analyzed the relationship between cores and processes.", 
                            "favicon.svg", 
                            "#projectSection"],
                            ["MDP Solver",
                            "Solves various mazes using 3 different implementations of the Markov Decision Process. " +
                            "These include a traditional BFS approach, a heuristic approach via A* search, and a final approach that " +
                            "emphasizes stochastic reliance. Written in Python (.ipynb)",
                            "favicon.svg",
                            "#projectSection"
                            ],
                            ["BlocKit", 
                            "A fully documented React component library for streamlined app development. Optimized for reliability, render speed, and component modularity. Written in typescript.",
                            "favicon.svg", 
                            "#projectSection"]
                            ]}/>
      </div>
      <div className={styles.section} id={styles.creditSection}>
        <MainTitle text="Language Skills" id={styles.creditTitle}/>
        <div id={styles.creditInfo}>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle text="Python"/>
                <Image src={"/icon_python.svg"} alt={"Python-Icon"} width={150} height={150}/>
              </Card>
                <Card header="Multithreading" >
                <Description fontSize="24px" text="Allowed for parallel processing of data within realistic timeframe (e.g. Evolutions of large cellular matrices). " />
                </Card>
                <Card header="Pandas" >
                <Description fontSize="24px" text="Used dataframes to contain data for later processing (e.g. Live NOAA weather data snapshots). " />
                </Card>
                <Card header="NumPy" >
                <Description fontSize="24px" text="Primarily used Numpy for consistent broadcasting of multidimentional arrays during high compute problems (e.g. Large-state MDP problems)." />
                </Card>
                <Card header="Scikit" >
                <Description fontSize="24px" text="Allowed for regression analysis on Dataframes and NumPy arrays  (e.g. Feature identification of weather conditions that effect power consumption)." />
                </Card>
            </CardDeck>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle text="C"/>
                <Image src={"/icon_c.svg"} alt={"C-Language-Icon"} width={150} height={150}/>
              </Card>
                <Card header="TTU HPCC" >
                <Description fontSize="24px" text="Completed numerous projects, using the Texas Tech University High-Performance Computing Cluster infrastructure. Utilized Bash commands to build makefiles into executables, and to establish a remote SSH connection with the cluster." />
                </Card> 
                <Card header="Complexity Analysis" >
                <Description fontSize="24px" text="Low level data type creation and pointer usage allowed for in depth algorithm tweaking to solve problems in the mot efficient way possible." />
                </Card>
                <Card header="Vim" >
                <Description fontSize="24px" text="Extensive usage of the Vim text editor (through the Cygwin environment) for C program creation." />
                </Card>
            </CardDeck>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle text="JavaScript"/>
                <Image src={"/icon_javascript.svg"} alt={"Javascript-Icon"} width={150} height={150}/>
              </Card>
                <Card header="ReactJS" >
                <Description fontSize="24px" text="I have used the ReactJS library via NextJS to create all of my recent web applications, including this website."/>
                </Card>
                <Card header="TypeScript" >
                <Description fontSize="24px" text="My primary exposure to JavaScript has been through TypeScript. As a developer, I find great solace in explicitly typed languages." />
                </Card>
                <Card header="Prisma" >
                <Description fontSize="24px" text="Created a custom API in conjunction with Postman + Railway for use within an ecommerce application. This included User Validations, Database Queries, and Cart Caching." />
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
                <Card header="Git" >
                <Description fontSize="24px" text="Very well practiced with Git concepts and console commands. All of my contemperary projects are version controlled using Git and hosted on Github." />
                </Card>
                <Card header="Requirements Engineering" >
                <Description fontSize="24px" text="Strong background in Requirements Engineering research, with emphasis on streamlining the requirement elicitation phase." />
                </Card>
                <Card header="Agile + CI/CD DevOps" >
                <Description fontSize="24px" text="Familiar with multiple different Agile software development frameworks, including the Scrum, and Extreme Programming (XP) methodologies." />
                </Card>
            </CardDeck>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle text="Accomplishments" />
                <Image src={"/icon_awards.svg"} alt={"Awards-Icon"} width={150} height={150}/>
              </Card>
                <Card header="Presidential Merit Scholar" >
                <Description fontSize="24px" text="Recognized by Texas Tech University for for exceptional academic achievements and leadership qualities" />
                </Card>
                <Card header="Texas Tech University: BS-CS" >
                <Description fontSize="24px" text="Expected graduation: December 2025. Graduating with a Bachelors Degree in Computer Science" />
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
