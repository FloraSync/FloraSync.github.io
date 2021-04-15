import styles from '../styles/NavWideScreen.module.scss'


export default function NavWideScreen() {
  return(
    <div className={`${styles.header} col-6 d-none d-md-block`}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>
          <img src="/florasync.png"
               className={styles.logoImage}/>
        </h1>
        <p className={styles.slogan}>
          We're making plants love technology.
        </p>
      </div>
    </div>
  )
}