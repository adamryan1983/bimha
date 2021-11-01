import styles from './Ticker.module.scss';

const Ticker = () => {
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
