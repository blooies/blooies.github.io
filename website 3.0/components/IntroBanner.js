import { Sriracha } from 'next/font/google';
import styles from '../styles/card.module.css';

const sriracha = Sriracha({
  weight: "400",
  subsets: ["latin"]
})

export default function IntroBanner() {
  return (
    <div className={[styles.card, styles.card_banner].join(' ')}>
      <h2 className={sriracha.className}>Hello! My name is Beverly.</h2>
      <div className={styles.card_container}>
        <p>I am a front-end engineer. Most recently, I worked at Spotify as an Engineering Manager but have extremely missed coding, and am now looking for engineering IC roles ☺️</p>
      </div>
    </div>
  );
}
