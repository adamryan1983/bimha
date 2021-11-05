import styles from './Right.module.scss';

const Coaches = () => {
  return (
    <div className={styles.coachContainer}>
      <h2>Coaching Staff</h2>
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
