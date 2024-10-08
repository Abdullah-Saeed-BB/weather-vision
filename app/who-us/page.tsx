import styles from "./who.module.css";

function WhoUsPage() {
  return (
    <div className={styles.main}>
      <p>
        We develop this project for submission to NASA International Space Apps
        Challenge 2024
      </p>
      <h2 className={styles.title}>Team Members</h2>
      <ul className={styles.cardList}>
        <Card name="Mishaal Alqarni" major="Cyber Security" />
        <Card name="Abdullah Saeed" major="Computer Science" />
        <Card name="Nouf Babtain" major="Computer Science" />
        <Card name="Lina Alharbi" major="Data Science" />
      </ul>
    </div>
  );
}

function Card({ name, major }: { name: string; major: string }) {
  return (
    <li className={styles.card}>
      <h2>{name}</h2>
      <span>{major}</span>
    </li>
  );
}

export default WhoUsPage;
