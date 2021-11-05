import styles from './Ticker.module.scss';
import React, { useState, useEffect, useRef } from 'react';

import { ScoreService } from '../../services/ScoreService';


const TickerPage = () => {

    const scoresList = [
      {"id": 1, "team1Name": "Bell Island", "team2Name": "St. John's", "division": "Bantam", "team1Score": 2, "team2Score": 5, "date": "November 3, 2021"},
      {"id": 2, "team1Name": "Goulds", "team2Name": "Bell Island", "division": "Timbits", "team1Score": 3, "team2Score": 2, "date": "November 1, 2021"},
      {"id": 3, "team1Name": "Bell Island", "team2Name": "CBS", "division": "Bantam", "team1Score": 4, "team2Score": 1, "date": "November 20, 2021"},
      {"id": 4, "team1Name": "Bell Island", "team2Name": "Southern Shore", "division": "Midget", "team1Score": 6, "team2Score": 7, "date": "November 11, 2021"},
      {"id": 5, "team1Name": "CBS", "team2Name": "Bell Island", "division": "Atoms", "team1Score": 1, "team2Score": 3, "date": "November 7, 2021"}
    ]
    const list = ['1','2','3','5','3']
    const [scores, setScores] = useState(scoresList);


    const GetScores = () => {

      return scores.map (score => (
        <div className={styles.ticker} key={score.id}>
        <div className={styles.scoreContainer}>
        <h4>{score.division}</h4>
        <div className={styles.scoreBox}>
          <div className={styles.containerLeft}>
            <div className={score.team1Score > score.team2Score ? styles.winner : styles.loser}>{score.team1Name} - {score.team1Score}</div>
            <div className={score.team2Score > score.team1Score ? styles.winner : styles.loser}>{score.team2Name} - {score.team2Score}</div>
          </div>
          <div className={styles.containerRight}>
            {score.date}
          </div>
          </div>
        </div>
        </div> 
         )
      )
    }

  return (
    <div className={styles.container}>
      <div className={styles.tickerWrap}>
        <div className={styles.ticker}>
          {scores.map(score => (
            <div className={styles.tickerItem} key={score.id}>
              <div className={styles.scoreContainer}>
                <h4>{score.division}</h4>
                <div className={styles.scoreBox}>
                  <div className={styles.containerLeft}>
                  <div className={score.team1Score > score.team2Score ? styles.winner : styles.none}>{score.team1Name} - {score.team1Score}</div>
                  <div className={score.team2Score > score.team1Score ? styles.winner : styles.none}>{score.team2Name} - {score.team2Score}</div>
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
