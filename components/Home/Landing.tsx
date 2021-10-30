import styles from './Home.module.scss'

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.heading}></div>
      <h1>Welcome</h1>
      <h2>to the 2021-22 Season</h2>
      <div className={styles.shape}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fillOpacity="1" d="M0,64L720,224L1440,256L1440,320L720,320L0,320Z"></path></svg>
      </div>
    </div>
  )
}

export default Landing
