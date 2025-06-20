'use client'
import { useState, useRef } from 'react';

import styles from "./page.module.css";
import CardDeck from "./components/blocKit/CardDeck";
import Card from "./components/blocKit/Card";
import Carousel from "./components/blocKit/Carousel";
import ContactForm from "./components/blocKit/ContactForm";
import MainTitle from "./components/blocKit/MainTitle";
import Subtitle from "./components/blocKit/Subtitle";
import Description from "./components/blocKit/Description";
import Image from "next/image";
import * as dotenv from 'dotenv';
import IconBelt from "./components/blocKit/IconBelt";

export default function Home() {
  //handle emailjs cred extraction from environment
  dotenv.config();
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID? 
                                      process.env.REACT_APP_EMAILJS_USER_ID
                                      :
                                      'ERROR';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID? 
                                      process.env.REACT_APP_EMAILJS_TEMPLATE_ID
                                      :
                                      'ERROR';



  //INITIALIZE 'view more' states
  const [pythonIsExpanded, setPythonExpansion] = useState(0)
  const [cIsExpanded, setCExpansion] = useState(0)
  const [javaScriptIsExpanded, setJavaScriptExpansion] = useState(0)

  //initialize scroll targets for 'collapse' buttons
  const pythonViewRef = useRef<HTMLDivElement>(null);
  const cViewRef = useRef<HTMLDivElement>(null);
  const jsViewRef = useRef<HTMLDivElement>(null);

  //handle 'view more' button click actions
  const handleClickMore = (sectionID: number) => {
    switch(sectionID){
      case(0): {
        setPythonExpansion(1)
        break;
      }
      case(1): {
        setCExpansion(1)
        break;
      }
      case(2): {
        setJavaScriptExpansion(1)
        break;
      }
      default: {               
        //do nothing
      }
    }
  };
  //handle 'collapse' button click actions
  const handleClickLess = (sectionID: number) => {
      switch(sectionID) {
        case 0:
          pythonViewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setPythonExpansion(0);
          break;
        case 1:
          cViewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setCExpansion(0);
          break;
        case 2:
          jsViewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setJavaScriptExpansion(0);
          break;
        default:
      }
    }
  return (
    <div className={styles.main}>
      <div className={styles.section} id={styles.heroSection}>
        <MainTitle 
              text="What I Believe:" 
              id={styles.heroTitle} 
              fontSize='min(52px,10vw)'/>
        <Image 
              src={"/headshot.svg"} 
              alt={"Hero-Headshot"}
              height={250} 
              width={250}
              id={styles.heroImg}
          />
        <CardDeck id={styles.heroInfo}>
          <Card id={styles.infoCard}>
            <Subtitle 
                  text="Reliable software " 
                  fontSize="min(24px, 5vw)" />
            <Description 
                  text='is usable software' 
                  fontSize="min(24px, 4.5vw)"/>
          </Card>
          <Card id={styles.infoCard}>
            <Subtitle 
                  text="Agile methodologies " 
                  fontSize="min(24px, 5vw)"/>
            <Description 
                  text='are essential for creating reliable software.' 
                  fontSize="min(24px, 4.5vw)"/>
          </Card>
          <Card id={styles.infoCard}>
            <Subtitle 
                  text="Clear requirements " 
                  fontSize="min(24px, 5vw)"/>
            <Description 
                  text='foster a productive development environment.' 
                  fontSize="min(24px, 4.5vw)"/>
          </Card>
        </CardDeck>
      <br id="projectTarget"/><br/>
      </div>
      <div className={styles.section} id={styles.projectSection}>
        <MainTitle 
              text="My Projects"
              id={styles.projectTitle} 
              fontSize='min(52px,10vw)'
              />
        <Carousel 
              numModals={5}
              modalData=
                  {[
                    ["Lexical Analyzer", 
                    "Built in C alongside a custom syntax parser. Designed to tokenize and classify input according to a defined grammar. The foundational layer of compiler design.", 
                    "/icon_previewDocs.svg", 
                    "https://github.com/kylekirch"
                    ],
                    ["Fishing Condition Calculator", 
                    "Python-based data analysis tool that combines pandas for data storage, NumPy and scikit-learn for statistical modeling, and matplotlib for weather-based data visualization.", 
                    "/icon_previewDocs.svg", 
                    "https://github.com/kylekirch"
                    ],
                    ["Cellular Evolution Simulator", 
                    "Simulates millions of cellular lifecycles using Python's threading library, deployed on the Texas Tech HPCC. Explores performance tradeoffs between cores and processes through high-volume parallelization.", 
                    "/icon_previewDocs.svg", 
                    "https://github.com/kylekirch"
                    ],
                    ["MDP Solver",
                    "Implements three MDP-based maze-solving strategies: BFS, A*, and a stochastic policy-based method. Developed in Python (.ipynb) to explore decision-making under uncertainty.",
                    "/icon_previewDocs.svg",
                    "https://github.com/kylekirch"
                    ],
                    ["BlocKit", 
                    "A custom-built, modular React component library. Engineered in TypeScript for performance, documentation clarity, and ease of integration across frontend applications.",
                    "/icon_previewDocs.svg", 
                    "https://kirch.wiki"
                    ]
                  ]}
              id={styles.projectCarousel} 
            />
      </div>
      <div className={styles.section} id={styles.creditSection}>
        <MainTitle 
              text="Language Skills" 
              id={styles.creditTitle} 
              fontSize='min(52px,10vw)'
              />
        <div id={styles.creditInfo}>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle 
                    text="Python" 
                    fontSize="min(24px, 5vw)"
                    />
                <Image 
                    src={"/icon_python.svg"} 
                    alt={"Python-Icon"} 
                    width={150} 
                    height={150} 
                    id='pythonView'
                    />
                <div ref={pythonViewRef}/>
                <Description 
                          fontSize="min(24px, 5vw)" 
                          id={styles.creditDescription}
                          text="A cornerstone of my data science and systems programming work. Notably, many of my compute-intensive python projets implement multithreading." />
              </Card>
              {!pythonIsExpanded? 
              <div>
                <IconBelt 
                      icons={[
                        '/icon_pandas.svg', 
                        '/icon_numpy.svg', 
                        '/icon_scikit.svg'
                        ]} 
                      hyperlinks={['']} />
                <button className={styles.expandButton} onClick={() => handleClickMore(0)}>More...</button> 
              </div>
              :
              <div>
                <Card>
                  <Subtitle 
                        text='Multithreading'  
                        fontSize="min(24px, 5vw)"
                        id='underlined' 
                        />
                  <Description 
                        text="Leveraged Python's threading module for parallel processing of large-scale cellular simulations."
                        fontSize="min(24px, 5vw)" 
                        />
                </Card>
                <Card >
                  <Subtitle 
                        text='Pandas'  
                        fontSize="min(24px, 5vw)"
                        id='underlined' 
                        />
                  <Description 
                        text="Used DataFrames to structure and manage data pipelines, including live NOAA weather data feeds." 
                        fontSize="min(24px, 5vw)" 
                        />
                </Card>
                <Card >
                  <Subtitle 
                        text='NumPy'  
                        fontSize="min(24px, 5vw)"
                        id='underlined' 
                        />
                  <Description 
                        text="Employed for efficient broadcasting and manipulation of multidimensional arrays—essential for large-state MDP problems."
                        fontSize="min(24px, 5vw)"  
                        />
                </Card>
                <Card >
                  <Subtitle 
                        text='Scikit-learn'  
                        fontSize="min(24px, 5vw)"
                        id='underlined' 
                        />
                  <Description 
                        text="Applied regression models to identify predictive features in time-series weather data and consumption patterns."
                        fontSize="min(24px, 5vw)" 
                        />
                </Card>
                <button 
                      className={styles.expandButton} 
                      onClick={() => handleClickLess(0)}>
                      Collapse
                    </button>
              </div>
              }
            </CardDeck>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle 
                      text="C" 
                      fontSize="min(24px, 5vw)"
                      />
                <Image 
                      src={"/icon_c.svg"} 
                      alt={"C-Language-Icon"} 
                      width={150} 
                      height={150} 
                      />
                <div ref={cViewRef}/>
                <Description 
                      fontSize="min(24px, 5vw)" 
                      id={styles.creditDescription} 
                      text="Developed performance-critical applications and systems on Texas Tech University's High Performance Computing Cluster." 
                      />
              </Card>
              {!cIsExpanded? 
              <div>
                <IconBelt 
                        icons={[
                          '/icon_gcc.svg', 
                          '/icon_bash.svg', 
                          '/icon_vim.svg'
                        ]} 
                        hyperlinks={['']} 
                        /> 
                <button 
                      className={styles.expandButton} 
                      onClick={() => handleClickMore(1)}>
                      More...
                    </button>
              </div>
                :
              <div>
                <Card>
                  <Subtitle 
                        text='TTU HPCC'  
                        fontSize="min(24px, 5vw)"
                        id='underlined' 
                        />
                  <Description 
                        text="Built C projects using Makefiles and remote execution via SSH. Gained experience with HPC resource management and Bash scripting."
                        fontSize="min(24px, 5vw)" 
                        />
                </Card>
                <Card >
                  <Subtitle 
                        text='Complexity Analysis'  
                        fontSize="min(24px, 5vw)"
                        id='underlined' 
                        />
                  <Description 
                        text="Crafted custom data structures with fine-grained pointer logic, allowing deep optimization of algorithmic performance." 
                        fontSize="min(24px, 5vw)" 
                        />
                </Card>
                <Card >
                  <Subtitle 
                        text='Vim'  
                        fontSize="min(24px, 5vw)"
                        id='underlined' 
                        />
                  <Description 
                        text="Wrote and managed all C code exclusively using Vim within the Cygwin environment—embracing efficiency and keyboard-centric workflows."
                        fontSize="min(24px, 5vw)"  
                        />
                </Card>
                <button 
                      className={styles.expandButton} 
                      onClick={() => handleClickLess(1)}>
                      Collapse
                    </button>
              </div>
            }
            </CardDeck>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle 
                    text="JavaScript / TypeScript" 
                    fontSize="min(24px, 5vw)"
                    />
                <Image 
                    src={"/icon_javascript.svg"} 
                    alt={"Javascript-Icon"} 
                    width={150} 
                    height={150} 
                    />
                <div ref={jsViewRef}/>
                <Description 
                        fontSize="min(24px, 5vw)" 
                        id={styles.creditDescription}
                        text="Focused on frontend development with a strong emphasis on type safety and modular design." 
                        />
              </Card>
              {!javaScriptIsExpanded? 
              <div>
                <IconBelt 
                      icons={[
                        '/icon_react.svg', 
                        '/icon_typescript.svg', 
                        '/icon_postman.svg'
                      ]} 
                      hyperlinks={['']} 
                      /> 
                <button 
                      className={styles.expandButton} 
                      onClick={() => handleClickMore(2)}>
                      More...
                  </button>
              </div>
              :
              <div>
                <Card>
                <Subtitle 
                      text='ReactJS (Next.js)'  
                      fontSize="min(24px, 5vw)"
                      id='underlined' 
                      />
                <Description 
                      text="Built and deployed responsive web apps, including this portfolio site, using React and the Next.js framework."
                      fontSize="min(24px, 5vw)" 
                      />
                </Card>
                <Card >
                  <Subtitle 
                        text='TypeScript'  
                        fontSize="min(24px, 5vw)"
                        id='underlined' 
                        />
                  <Description 
                        text="Preferred language for frontend development—offers clear type constraints that reduce runtime errors and aid scalability." 
                        fontSize="min(24px, 5vw)" 
                        />
                </Card>
                <Card >
                  <Subtitle 
                        text='Prisma'  
                        fontSize="min(24px, 5vw)"
                        id='underlined' 
                        />
                  <Description 
                        text="Engineered a custom API layer with Prisma + Railway, integrated with Postman for testing. Handled database CRUD operations, cart caching, and authentication logic in an ecommerce app."
                        fontSize="min(24px, 5vw)"  
                        />
                </Card>
                <button 
                    className={styles.expandButton} 
                    onClick={() => handleClickLess(2)}>
                    Collapse
                </button>
              </div>
              }
            </CardDeck>
        </div>
      </div>
      <div className={styles.section} id={styles.creditSection}>
        <MainTitle 
              text="More Capabilities" 
              id={styles.creditTitle} 
              fontSize='min(52px,10vw)'
              />
        <div id={styles.creditInfo} className={styles.certContainer}>
          <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle 
                    text="Accomplishments" 
                    fontSize="min(24px, 5vw)"
                    />
                <Image 
                    src={"/icon_awards.svg"} 
                    alt={"Awards-Icon"} 
                    width={150} 
                    height={150}
                    />
              </Card>
                <Card >
                  <Subtitle 
                        text="B.S. in Computer Science" 
                        fontSize="min(24px, 5vw)"
                        id='underlined'
                        />
                  <Description 
                        fontSize="min(24px, 5vw)"
                        text="Texas Tech University | Expected Graduation: December 2025" 
                        />
                </Card>
                <Card >
                  <Subtitle 
                        text="Presidential Merit Scholar"
                        fontSize="min(24px, 5vw)"
                        id='underlined'
                        />
                  <Description 
                        fontSize="min(24px, 5vw)"
                        text="Recognized by Texas Tech University for for exceptional academic achievements and leadership qualities." 
                        />
                </Card>
                <Card id={styles.certification}>
                  <Subtitle 
                        text="Certifications"
                        fontSize="min(24px, 5vw)"
                        id='underlined'
                        />
                <div className={styles.certificationInfo}>
                  <Subtitle 
                        fontSize="18" 
                        text="Responsive Web Design" 
                        />
                  <Description 
                        fontSize="min(24px, 5vw)"
                        text="FreeCodeCamp: certified for advanced competence in HTML and CSS programming, as well as basic competence in responsive JavaScript programming." 
                        />
                </div>
                <div className={styles.certificationInfo}>
                  <Subtitle 
                        fontSize="18" 
                        text="Advanced Java Programming" 
                        />
                  <Description 
                        fontSize="min(24px, 5vw)"
                        text="Java Precision Exam 840: certified for advanced level competence in Object Oriented Computer Programming using Java." />
                </div>
                </Card>
                
            </CardDeck>
            <CardDeck id={styles.creditCard}>
              <Card id={styles.creditImg}>
                <Subtitle 
                    text="Industry Practices"
                    />
                <Image 
                    src={"/icon_tools.svg"} 
                    alt={"Tools-Icon"} 
                    width={150} 
                    height={150}
                    />
              </Card>
                <Card>
                  <Subtitle 
                        text="Git (Version Control)" 
                        fontSize="min(24px, 5vw)"
                        id='underlined'
                        />
                  <Description 
                        fontSize="min(24px, 5vw)"
                        text="Daily user of Git for source control and collaboration. All active projects are tracked through Git and hosted on GitHub. Familiar with key commands and branching strategies." 
                        />
                </Card>
                <Card >
                  <Subtitle 
                        text="Requirements Engineering" 
                        fontSize="min(24px, 5vw)"
                        id='underlined'
                        />
                <Description 
                        fontSize="min(24px, 5vw)"
                        text="Experienced in requirement elicitation and specification. Focused on reducing ambiguity early in the development lifecycle through structured interviews, user stories, and formal documentation." 
                        />
                </Card>
                <Card >
                  <Subtitle 
                        text="Agile & DevOps Practices"
                        fontSize="min(24px, 5vw)"
                        id='underlined'
                        />
                <Description 
                      fontSize="min(24px, 5vw)"
                      text="Familiar with iterative development using Scrum and Extreme Programming (XP) methodologies. Exposure to continuous integration and deployment workflows (CI/CD) and the cultural principles behind effective DevOps teams." 
                      />
                </Card>
            </CardDeck>
            
        </div>
        <br id="contactTarget"/><br/><br/>
      </div>
      <div className={styles.section} id={styles.contactSection}>
        <MainTitle 
              text="Reach Out" 
              id={styles.contactTitle} 
              fontSize='min(52px,10vw)'
              />
        <ContactForm 
              EMAILJS_KEY={EMAILJS_USER_ID} 
              TEMPLATE_ID={EMAILJS_TEMPLATE_ID} 
              id={styles.contactForm}
          />
      </div>

      
    </div>
  );
}
