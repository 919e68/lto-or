import clsx from 'clsx'
import styles from './OfficeSection.module.scss'

export const OfficeSection = ({ fieldOffice, officeCode, tin, date }) => {
  return (
    <div className={styles.root}>
      <div className={styles.leftFields}>
        <div className={clsx(styles.field, styles.fieldOffice)}>
          <div className={styles.label}>Field Office:</div>
          <div className={styles.value}>{fieldOffice}</div>
        </div>

        <div className={clsx(styles.field, styles.fieldCode)}>
          <div className={styles.label}>Office Code:</div>
          <div className={styles.value}>{officeCode}</div>
        </div>
      </div>

      <div className={styles.rightFields}>
        <div className={clsx(styles.field, styles.fieldTin)}>
          <div className={styles.label}>TIN:</div>
          <div className={styles.value}>{tin}</div>
        </div>

        <div className={clsx(styles.field, styles.fieldDate)}>
          <div className={styles.label}>Date:</div>
          <div className={styles.value}>{date}</div>
        </div>
      </div>
    </div>
  )
}
