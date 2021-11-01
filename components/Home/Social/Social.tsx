import styles from './Social.module.scss'
import SocialBox from './SocialBox'
import Newsletter from './Newsletter'

const Social = () => {
  return (
    <div className={styles.socialContainer}>
      <Newsletter />
      <SocialBox title="FB"/>
      <SocialBox title="twitter"/>
    </div>
  )
}

export default Social
