import { Header, OfficeSection, PersonalDetails, PaymentDetails } from 'components'

import styles from './App.module.scss'

const App = () => {
  const data = {
    header: {
      country: 'Republic of the Philippines',
      department: 'DEPARTMENT OF TRANSPORTATION',
      office: 'LAND TRANSPORTATION OFFICE',
      address: '2nd Flr. PAG-ASA Public Market, Gordon Avenue <br> Pag-Asa, Olongapo City'
    },
    office: {
      fieldOffice: 'OLONGAPO DISTRICT OFFICE',
      officeCode: '0364',
      tin: '001704153000',
      date: '04/04/2023 3:32 PM'
    },
    personal: {
      orNumber: '0364-000000075503',
      name: 'BELTRAN, CHRISTIAN REYES',
      address: 'Bahay Kubo Kahit Munti, Santa Rita, Olongapo City, <br> 2200, Zambales',
      clientId: '21-911-101-2738530'
    },
    payment: {
      transactionNumber: 'TX-MVIRS-00000000-000000',
      plateNumber: '123ABC',
      fileNumber: '040100001248419',
      color: 'WHITE',
      yearModel: '2022',
      validityMonth: '01/2024',
      renewalWeek: '01/01/2034 - 01/07/2034',
      totalAmount: '675.25',
      totalAmountInWords: 'SIX HUNDRED SEVENTY FIVE PESOS AND 25/100 CENTAVO(S)'
    }
  }

  return (
    <div className={styles.app}>
      <Header {...data.header} />
      <OfficeSection {...data.office} />
      <PersonalDetails {...data.personal} />
      <PaymentDetails {...data.payment} />
    </div>
  )
}

export default App
