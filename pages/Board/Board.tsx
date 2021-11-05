import styles from './Board.module.scss'
import Member from '@components/Member'
import { Card } from 'primereact/card';

const Board = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Board of Directors</h1>
        <div className={styles.board}>
          <Card className={styles.card}>
            <Member position="President" name="Gary McLaughlin"/>
          </Card>
          <Card className={styles.card}>
            <Member position="Vice-President" name="Jeanette Ricketts"/>
          </Card>
          <Card className={styles.card}>
            <Member position="2nd Vice-President" name="Jennifer Power"/>
          </Card>
          <Card className={styles.card}>
            <Member position="Secretary" name="Allison Noseworthy"/>
          </Card>
          <Card className={styles.card}>
            <Member position="Treasurer" name="Keshia Ryan"/>
          </Card>
          <Card className={styles.card}>
            <Member position="Communications Director" name="Amanda Kavanagh"/>
          </Card>
          <Card className={styles.card}>
            <Member position="IHL Rep" name="Dave Banko"/>
          </Card>
          <Card className={styles.card}>
            <Member position="Technical Director" name="Adam Ryan"/>
          </Card>

        </div> 
       </div>
    </div>
  )
}

export default Board