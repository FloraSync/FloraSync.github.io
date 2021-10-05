import Header from '../components/Head'
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      <h1>About Us</h1>
    </div>
  )
}