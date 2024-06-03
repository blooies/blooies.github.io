import styles from '../styles/card.module.css';

export default function EmploymentCard() {
  return (
    <div className={[styles.card, styles.card_two].join(' ')}>
      <h2>Work, work, work</h2>
      <div className={styles.card_container}>
        <h3>Spotify</h3>
        <h5><b>2023</b>: Engineering Manager</h5>
        <h5><b>2019-2023</b>: Senior Web Engineer</h5>
    
        <h3>Zola</h3>
        <h5><b>2018-2019</b>: Software Engineer II</h5>

        <h3>Clarifai</h3>
        <h5><b>2017-2018</b>: Front End Engineer</h5>

        <h3>Crisp Media</h3>
        <h5><b>2014-2017</b>: Front End Developer</h5>
      </div>
      <div className={styles.card_cta}>
          <a title="Resume" href="https://drive.google.com/file/d/1v06QEvwFkkapBL-PcELSrNm16O-qBOpD/view" target="_blank">Resume</a>
        </div>
        <div className={styles.card_cta}>
          <a title="LinkedIn" href="http://www.linkedin.com/in/bevmah" target="_blank">LinkedIn</a>
        </div>
    </div>
  );
}
