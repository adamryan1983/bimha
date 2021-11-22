import styles from './Main.module.scss'
import Left from '@components/Home/Left/Left'
import Right from '@components/Home/Right/Right'
import Social from './Social/Social'

const Main = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Left />
        <Right />
      </main>
      <Social />
    </div>
  )
}

export default Main
