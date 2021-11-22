import styles from './Right.module.scss';
import { useState, useEffect } from 'react';

const Scores = () => {

  const [scores, setScores] = useState<any[]>([])

  const scoresLoader = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `${process.env.NEXT_PUBLIC_HARPER_HEADER}`);

    const raw = JSON.stringify({
        "operation": "sql",
        "sql": `SELECT * FROM scores.scores ORDER BY date DESC LIMIT 5`
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };
    
    fetch("https://bimhl-adamryan.harperdbcloud.com", requestOptions)
      .then(response => response.text())
      .then(result => setScores(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    scoresLoader();
  }, []);

  return (
    <div className={styles.gamesContainer}>
      <div className={styles.header}>
        <h3>Recent Scores</h3>
        <div className={styles.headerRight} />
      </div>
      {Array.from(scores).map(score => (
        <div className={styles.gameBoard} key={score.id}>
          <h3>{score.division} - {score.date}</h3>
          <div className={styles.scoreContainer}>
            <div className={score.Team1Score > score.Team2Score ? styles.winner : styles.none}>{score.Team1Name}</div>
            <div className={styles.scoreBoard}>
              {score.Team1Score}:{score.Team2Score}
            </div>
            <div className={score.Team2Score > score.Team1Score ? styles.winner : styles.none}>{score.Team2Name}</div>
          </div>

    </div>
      ))}
    </div>
  )
}

export default Scores
