import styles from '../styles/card.module.css';

export default function IntroCard() {
  return (
    <div className={[styles.card, styles.card_one].join(' ')}>
      <h2>About me</h2>
      <div className={styles.card_container}>
        <p>🗽 I am a front-end engineer living in NYC. Born and raised in New York!</p>
        <p>💻 10 years ago I started my career at a digital ads software company, and since then I've worked at a bunch of industries from AI, wedding to music.</p>
        <p>🎶 I started as an engineer at Spotify, but most recently was an Engineering Manager. My team led the execution for "Your Artist Messages" which has become one of the most highlighted and celebrated features on Spotify's end-of-the-year campaign, Wrapped.</p>
      </div>
    </div>
  );
}
