import styles from './Right.module.scss'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/rhea/theme.css'
import 'primereact/resources/primereact.css';

const NewsLetter = () => {
  return (
    <div className={styles.newsletterContainer}>
      <h2>Join our Newsletter</h2>
      <InputText type="text" placeholder="Email" />
      <Button>Subscribe</Button>
    </div>
  )
}

export default NewsLetter
