'use client'

import styles from "./core/blocKit.module.css"

import { useState } from 'react';
import Image from 'next/image';
import Subtitle from './Subtitle';
import Description from './Description';
import upIcon from "./core/assets/img/icon_up.svg"
import downIcon from "./core/assets/img/icon_down.svg"

const Modal = (props: {
                        title: string
                        description: string
                        imgURL: string
                        projectURL: string
                        id: string
}) => {
  return(
    <div className={styles.modalContainer} id={props.id}>
      <div className={styles.modalInfo}>
        <Subtitle text={props.title}/>
        <Description text={props.description} fontSize="min(24px, 5vw)"  id={styles.modalDescription}/>
      </div>
        <div className={styles.modalFocus}>
          <a href={props.projectURL} target="_blank" className={styles.modalLink}>
            <Image
                    className={styles.modalImage}
                    src={props.imgURL}
                    alt={props.title+" modal preview image"}
                    id={styles.invertable}
                    width={200}
                    height={200}
                    priority
                  />
          </a>
          
        </div>
    </div>
  )
}

const Carousel = (props: {
                        numModals: number //Determines the number of modals that will be generated
                        modalData: Array<Array<string>>
                        id?: string
                        
}) => {
  // Define the Item type
  type modalItem = {
    title: string;
    description: string;
    imgURL: string;
    projectURL: string;
  };
  const id = props.id? props.id: 'defaultCarousel';
  const modalData = props.modalData;

  //create an array of the modal items to be used and their corresponding data
  const modals: modalItem[] = new Array(props.numModals)
  for(let i = 0; i < props.numModals; i++){
    modals[i] = {
        title: modalData[i][0],
        description: modalData[i][1],
        imgURL: modalData[i][2],
        projectURL: modalData[i][3]? modalData[i][3]: "#",
      };
  }

  const [currentModal, setCurrentModal] = useState(modals[0])
  const [currentModalNum, setCurrentModalNum] = useState(0)
  const handleClickUp = () => {
    if(currentModalNum+1 < props.numModals){
        setCurrentModal(modals[currentModalNum+1])
        setCurrentModalNum(currentModalNum+1)
    } else {
        setCurrentModal(modals[0]);
        setCurrentModalNum(0)
    }
  };
  const handleClickDown = () => {
    if(currentModalNum-1 >= 0){
        setCurrentModal(modals[currentModalNum-1])
        setCurrentModalNum(currentModalNum-1)
    } else {
        setCurrentModal(modals[props.numModals-1]);
        setCurrentModalNum(props.numModals-1)
    }
  };
  const modalStyle = props.numModals > 1? '': 'singleModal';
  return (
    <div className={styles.carousel} id={id}>
      <Modal 
        title={currentModal.title}
        description={currentModal.description}
        imgURL={currentModal.imgURL}
        projectURL={currentModal.projectURL}
        id={modalStyle}
      />
      {props.numModals > 1?
        <div className={styles.carouselButton}>
          <button className={styles.changeButton} onClick={handleClickUp}><Image src={upIcon} alt={"Up button"} width={50} id={styles.invertable}/></button>
          <button className={styles.changeButton} onClick={handleClickDown}><Image src={downIcon} alt={"Down button"} width={50} id={styles.invertable}/></button>
        </div>
        :
      <></>
      }
      
    </div>
  );
}


export default Carousel