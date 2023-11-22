import styles from './PersonalDetails.module.scss'

export const ORInfo = ({ orNumber }) => {
  return (
    <div className={styles.orField}>
      <div className={styles.label}>OFFICIAL RECEIPT</div>
      <div className={styles.value}>{orNumber}</div>
    </div>
  )
}

export const QRInfo = ({ qrNumber }) => {
  return (
    <div className={styles.qrField}>
      <img src='/assets/img/qr.png' />
    </div>
  )
}

export const PersonalDetails = ({ orNumber, name, address, clientId }) => {
  return (
    <div className={styles.root}>
      <div className={styles.details}>
        <div className={styles.left}>
          <ORInfo orNumber={orNumber} />

          <div className={styles.field}>
            <div className={styles.label}>
              RECEIVE FROM <span className={styles.italic}>(Last Name, First Name Middle Name)</span>
            </div>
            <div className={styles.value}>{name}</div>
          </div>

          <div className={styles.field}>
            <div className={styles.label}>
              ADDRESS <span className={styles.italic}>(No. Street, Barangay, Municipality, Zip Code, Province)</span>
            </div>
            <div
              className={styles.value}
              dangerouslySetInnerHTML={{
                __html: address
              }}
            ></div>
          </div>
        </div>

        <div className={styles.right}>
          <QRInfo qrNumber={123} />
        </div>
      </div>

      <div className={styles.tin}>
        <div className={styles.label}>
          TIN <span className={styles.italic}>(Tax Identification Number)</span>
        </div>
        <div className={styles.value}>
          <div className={styles.valueLabel}>LTO Client ID / LTO Business ID</div>
          <div className={styles.valueNumber}>{clientId}</div>
        </div>
      </div>
    </div>
  )
}
