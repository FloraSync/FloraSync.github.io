import styles from '../styles/NavWideScreen.module.css'

export default function Header() {
  return(
    <div
      className={styles.header}
    >
      <div    
        className={styles.headerContent}
      >
        <h1
          className={styles.logo}
        >
          <img
            src="/florasync.png"
            className={styles.logoImage}
          />
        </h1>
        <p
          className={styles.slogan}
        >
          We're making plants love technology.
        </p>
      </div>
    </div>
  )
}