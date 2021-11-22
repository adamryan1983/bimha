import styles from './Ticker.module.scss';
import React, { useState, useEffect, useRef } from 'react';

import { ScoreService } from '../../services/ScoreService';


const TickerPage = () => {

  const [scores, setScores] = useState<any[]>([])

  const scoresLoader = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `${process.env.NEXT_PUBLIC_HARPER_HEADER}`);

    const raw = JSON.stringify({
        "operation": "sql",
        "sql": `SELECT * FROM scores.scores ORDER BY date DESC LIMIT 10`
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
    <div className={styles.container}>
      <div className={styles.tickerWrap}>
        <div className={styles.ticker}>
          {Array.from(scores).map(score => (
            <div className={styles.tickerItem} key={score.id}>
              <div className={styles.scoreContainer}>
                <h4>{score.division}</h4>
                <div className={styles.scoreBox}>
                  <div className={styles.containerLeft}>
                  <div className={score.Team1Score > score.Team2Score ? styles.winner : styles.none}>{score.Team1Name} - {score.Team1Score}</div>
                  <div className={score.Team2Score > score.Team1Score ? styles.winner : styles.none}>{score.Team2Name} - {score.Team2Score}</div>
                  </div>
                  <div className={styles.containerRight}>
                    {score.date}
                  </div>
                </div>
              </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TickerPage
