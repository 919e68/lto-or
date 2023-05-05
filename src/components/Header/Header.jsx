import styles from './Header.module.scss'

export const Header = ({ country, department, office, address }) => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src='assets/img/dto-logo.png' />
      </div>

      <div className={styles.titles}>
        <div className={styles.country}>{country}</div>
        <div className={styles.department}>{department}</div>
        <div className={styles.office}>{office}</div>
        <div
          className={styles.address}
          dangerouslySetInnerHTML={{
            __html: address
          }}
        ></div>
      </div>

      <div className={styles.logo}>
        <img src='assets/img/lto-logo.svg' />
      </div>
    </div>
  )
}
