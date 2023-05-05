import styles from './PaymentDetails.module.scss'

export const PaymentDetails = ({ transactionNumber, plateNumber, fileNumber, color, yearModel, validityMonth, renewalWeek, totalAmount, totalAmountInWords }) => {
  return (
    <div className={styles.root}>
      <div className={styles.table}>
        <div className={styles.left}>
          <div className={styles.header}>PAYMENT DETAILS</div>

          <div className={styles.list}>
            <div className={styles.field}>
              <div className={styles.label}>Transaction No:</div>
              <div className={styles.value}>{transactionNumber}</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>Plate No:</div>
              <div className={styles.value}>{plateNumber}</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>File No:</div>
              <div className={styles.value}>{fileNumber}</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>Classification:</div>
              <div className={styles.value}>Private</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>Vehicle Type:</div>
              <div className={styles.value}>Motorcycle Without Sidecar</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>Fuel Type:</div>
              <div className={styles.value}>Gas</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>Aircon Type:</div>
              <div className={styles.value}>N/A</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>Color:</div>
              <div className={styles.value}>{color}</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>Year Model:</div>
              <div className={styles.value}>{yearModel}</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}></div>
              <div className={styles.value}>
                This payment is valid until {validityMonth} and due for renewal on {renewalWeek}.
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.header}>BREAKDOWN OF PAYMENT</div>

          <div className={styles.list}>
            <div className={styles.field}>
              <div className={styles.label}>Delinquent Registration</div>
              <div className={styles.currency}>PHP</div>
              <div className={styles.amount}>120.00</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>MVUC</div>
              <div className={styles.currency}>PHP</div>
              <div className={styles.amount}>480.00</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>Science Tax</div>
              <div className={styles.currency}>PHP</div>
              <div className={styles.amount}>13.50</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>Science Tax Late Registration</div>
              <div className={styles.currency}>PHP</div>
              <div className={styles.amount}>6.75</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>Storage Fee</div>
              <div className={styles.currency}>PHP</div>
              <div className={styles.amount}>45.00</div>
            </div>

            <div className={styles.field}>
              <div className={styles.label}>Legal Research Fee</div>
              <div className={styles.currency}>PHP</div>
              <div className={styles.amount}>10.00</div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.paymentSummary}>
        <div className={styles.totalAmount}>
          <div className={styles.label}>TOTAL AMOUNT PAID:</div>
          <div className={styles.currency}>PHP</div>
          <div className={styles.amount}>{totalAmount}</div>
        </div>

        <div className={styles.totalAmountInWords}>
          <div className={styles.label}>AMOUNT IN WORDS:</div>
          <div className={styles.amount}>{totalAmountInWords}</div>
        </div>

        <div className={styles.paymentType}>
          <div className={styles.field}>
            <div className={styles.label}>MODE OF PAYMENT:</div>
            <div className={styles.value}>Cash</div>
          </div>

          <div className={styles.field}>
            <div className={styles.label}>LOCATION:</div>
            <div className={styles.value}>Olongapo District Office</div>
          </div>

          <div className={styles.field}>
            <div className={styles.label}>CASHIER:</div>
            <div className={styles.value}>Mylene A. Nunez</div>
          </div>

          <div className={styles.field}>
            <div className={styles.label}>POS MACHINE:</div>
            <div className={styles.value}>Olongapo DO-Portal-Cashier</div>
          </div>
        </div>

        <div className={styles.barCode}></div>
      </div>
    </div>
  )
}
