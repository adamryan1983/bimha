import styles from '../pages/Board/Board.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const user = faUserCircle as IconProp;

interface Props {
  position: string;
  name: string;
}

const Member = (props: Props) => {
  return (
    <div className={styles.boardMember}> 
      <div className={styles.infoSection}>
        <div className={styles.iconContainer}><FontAwesomeIcon icon={user} className={styles.icon}/></div>
          <div className={styles.memberInfo}>
            <div className={styles.position}>
              <h2>{props.position} </h2>             
            </div>
            <div className={styles.name}>
              {props.name}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Member
