import Image from 'next/image';
import styles from '../styles/card.module.css';

const PROJECTS = [
  { 
    name: "Death Stare Battle",
    image:"/death-stare-battle.png",
    github: "http://www.github.com/blooies/death-stare-battle"
  },
  {
    name: "Tetris",
    image: "/tetris.png",
    link: "http://beverlymah.com/tetris",
    github: "http://www.github.com/blooies/tetris",
  },
  {
    name: "Snake",
    image: "/snake.png",
    link: "http://beverlymah.com/snake",
    github: "http://www.github.com/blooies/snake"
  },
  {
    name: "Man Tears",
    image: "/mantears.png",
    github: "http://www.github.com/blooies/man_tears"
  },
  {
    name: "Truckhunter",
    image: "/truckhunter.png",
    github: "http://www.github.com/blooies/TruckHunter"
  }
]

export default function ProjectsCard() {
  return (
    <div className={[styles.card, styles.card_three].join(' ')}>
      <h2>Some fun stuff</h2>
      <div className={styles.card_container}>
        {
          PROJECTS.map(project => {
            return (
              <div className={styles.project_card}>
                <Image
                  src={project.image}
                  width={250}
                  height={150}
                  style={{objectFit: "cover", borderRadius: "10px"}}
                />
                <h3>{project.name}</h3>
                {
                  project.link && <div className={styles.card_cta}><a title="Project Link" href={project.link} target="_blank">Link</a></div>
                }
                <div className={styles.card_cta}><a title="GitHub Link" href={project.github} target="_blank">GitHub</a></div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
