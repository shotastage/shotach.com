import Image from "next/image";
import styles from "./page.module.scss";
import NavigationPill from "../views/ NavigationPill";
export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <NavigationPill />
        <h1>Hello, world</h1>
      </main>

      <section className={styles.section}>
        <h2>Products</h2>
        <p>Introducing our latest products:</p>
        <ul>
          <li>Web Site Creation & Renewal</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Services</h2>
        <p>Our services include:</p>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </section>
    </>
  );
}
