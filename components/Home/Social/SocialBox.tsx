import styles from './Social.module.scss'
import PropTypes from 'prop-types';

interface Props {
  title: string
}

const SocialBox = ({title}:Props) => {
  return (
    <div className={title === 'FB' ? styles.socialBoxContainerFB : styles.socialBoxContainerTwitter}>
      <div className={styles.titleBar}>
        <h3 className={styles.mainTitle}>Join<span className={styles.title}> our {title}</span></h3>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.boxContainer}>
          Button here
        </div>
      </div>
    </div>
  )
}


export default SocialBox
