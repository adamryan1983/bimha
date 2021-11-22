import styles from './Ticker.module.scss';
import React, {useEffect, useState} from 'react';


const Ticker = () => {

  const [scores, setScores] = useState([]);

  const scoresLoader = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `${process.env.NEXT_PUBLIC_HARPER_HEADER}`);

    const raw = JSON.stringify({
        "operation": "sql",
        "sql": `SELECT * FROM scores.scores`
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
    console.log(scores)
  }, [scores]);
   // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={styles.container}>
      <div className={styles.ticker__wrap}>
        <div className={styles.ticker}>
          <div className={styles.ticker__item}>
            <div className={styles.gameContainer}>
              <div className={styles.division}>Bantams</div>
              <div className={styles.summary}>
                <div className={styles.division}>Bell Island: 5</div>
                <div className={styles.division}>Goulds: 4</div>
              </div>
            </div>
          </div>
          <div className={styles.ticker__item}>
            <div className={styles.gameContainer}>
              <div className={styles.division}>Bantams</div>
              <div className={styles.summary}>
                <div className={styles.division}>Bell Island: 5</div>
                <div className={styles.division}>Goulds: 4</div>
              </div>
            </div>
          </div>
          <div className={styles.ticker__item}>
            <div className={styles.gameContainer}>
              <div className={styles.division}>Bantams</div>
              <div className={styles.summary}>
                <div className={styles.division}>Bell Island: 5</div>
                <div className={styles.division}>Goulds: 4</div>
              </div>
            </div>
          </div>
          <div className={styles.ticker__item}>
            <div className={styles.gameContainer}>
              <div className={styles.division}>Bantams</div>
              <div className={styles.summary}>
                <div className={styles.division}>Bell Island: 5</div>
                <div className={styles.division}>Goulds: 4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticker
