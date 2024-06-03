import styles from '../styles/card.module.css';

export default function ContactCard() {
  return (
    <div className={[styles.card, styles.card_four].join(' ')}>
      <h2>Let's connect!</h2>
      <div className={styles.card_container}>
        <div className={styles.card_cta}><a href="mailto:beverlymah@gmail.com">Email</a></div>
        <div className={styles.card_cta}><a href="http://www.linkedin.com/in/bevmah" target="_blank">LinkedIn</a></div>
        <div className={styles.card_cta}><a href="http://www.github.com/blooies" target="_blank">GitHub</a></div>
      </div>
    </div>
  );
}
