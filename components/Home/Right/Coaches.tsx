import styles from './Right.module.scss';

const Coaches = () => {
  return (
    <div className={styles.coachContainer}>
      <div className={styles.header}>
        <h3>Coaching Staff</h3>
        <div className={styles.headerRight} />
      </div>
      <ul>
        <div>Timbits</div>
        <li>Coach</li>
        <li>Coach</li>
        <li>Trainer</li>
      </ul>
      <ul>
        <div>U11</div>
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
      <ul>
        <div>U18</div>
        <li>Coach</li>
        <li>Coach</li>
        <li>Trainer</li>
      </ul>
    </div>
  )
}

export default Coaches
