import styles from './Right.module.scss';

const Scores = () => {
  return (
    <div className={styles.gamesContainer}>
      <h2>Game 1</h2>
      <ul>
        <div>Timbits</div>
        <li>Coach</li>
        <li>Coach</li>
        <li>Trainer</li>
      </ul>
      <ul>
        <div>Game 2</div>
        <li>Coach</li>
        <li>Coach</li>
        <li>Trainer</li>
      </ul>
      <ul>
        <div>U15</div>
        <li>Coach</li>
        <li>Coach</li>
        <li>Trainer</li>
      </ul>
    </div>
  )
}

export default Scores
