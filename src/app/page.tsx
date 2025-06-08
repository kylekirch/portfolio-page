import Image from "next/image";
import styles from "./page.module.css";
import Icon from "./components/kirchLib/Icon";

export default function Home() {
  const imageSrc="/favicon.svg"

  return (
    <div className={styles.main}>
      <Icon src={imageSrc} href="https://kirch.wiki"/>
    </div>
  );
}
