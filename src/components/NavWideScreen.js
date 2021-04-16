import styles from '../styles/NavWideScreen.module.scss'


export default function NavWideScreen() {
  return(
    <div className={`${styles.header} col-6 d-none d-xl-block`}>
      <div className={`${styles.headerContent} row`}>
        <div className="col-xl-9 offset-xl-2 text-end">
          <h1 className={`${styles.logo}`}>
            <img src="/florasync.png"
                className={styles.logoImage}
                alt="FloraSync"/>
          </h1>
          <p className={styles.slogan}>
            We're making plants love technology.
          </p>
        </div>
        
      </div>
    </div>
  )
}