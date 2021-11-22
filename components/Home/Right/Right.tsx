import styles from './Right.module.scss'
import Coaches from './Coaches'
import RequestRide from './RequestRide.jsx'
import Scores from './RecentScores'
import NewsLetter from './NewsLetter'

const Landing = () => {
  return (
    <div className={styles.right}>
      <Scores />
      <NewsLetter />
      <RequestRide />
      <Coaches />
    </div>
  )
}

export default Landing
