import styles from './Social.module.scss'

const Newsletter = () => {
  return (
    <div className={styles.newsLetterContainer}>
      <div className={styles.LeftSide}>
        <h3 className={styles.mainTitle}>Sign up<span className={styles.title}> for the Newsletter</span></h3>
        <div className={styles.blurb}> 
          blurb here
        </div>
      </div>
      <div className={styles.RightSide}>
        <form>
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
