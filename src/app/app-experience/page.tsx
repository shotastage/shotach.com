import Image from "next/image";
import styles from "./page.module.scss";
import NavigationPill from "../../views/NavigationPill";

export default function GenerativeAI() {
  return (
    <main className={styles.main}>
      <NavigationPill/>
      <h1>App Experience</h1>
    </main>
  );
}