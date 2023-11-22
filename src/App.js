import { Header, OfficeSection, PersonalDetails, PaymentDetails } from 'components'

import styles from './App.module.scss'

const App = () => {
  // const data = {
  //   header: {
  //     country: 'Republic of the Philippines',
  //     department: 'DEPARTMENT OF TRANSPORTATION',
  //     office: 'LAND TRANSPORTATION OFFICE',
  //     address: '2nd Flr. PAG-ASA Public Market, Gordon Avenue <br> Pag-Asa, Olongapo City'
  //   },
  //   office: {
  //     fieldOffice: 'OLONGAPO DISTRICT OFFICE',
  //     officeCode: '0364',
  //     tin: '367-523-829-0000',
  //     date: '10/03/2022 10:35 AM'
  //   },
  //   personal: {
  //     orNumber: '0364-000000075503',
  //     name: 'VALERIO, CARLOTA TAMAYO',
  //     address: '143 R Bagumbayan - Orion Bataan',
  //     clientId: '21-841206-3873703'
  //   },
  //   payment: {
  //     transactionNumber: 'TX-MVIRS-00000000-20221003123674',
  //     plateNumber: 'CD12610',
  //     fileNumber: '030100000275787',
  //     color: 'BLACK',
  //     yearModel: '2017',
  //     validityMonth: '10/2023',
  //     renewalWeek: '10/03/2022 - 10/07/2023',
  //     totalAmount: '675.25',
  //     totalAmountInWords: 'SIX HUNDRED SEVENTY FIVE PESOS AND 25/100 CENTAVO(S)'
  //   }
  // }

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
      tin: '321-653-129-0000',
      date: '02/08/2023 10:28 AM'
    },
    personal: {
      orNumber: '0364-000000165521',
      name: 'CALARA,CHRISTIAN PAUL GUERRERO',
      address: '230 Manggahan St. Sta Rita, Olongapo City, Zambales',
      clientId: '21-542216-4877162'
    },
    payment: {
      transactionNumber: 'TX-MVIRS-00000000-20230208162674',
      plateNumber: '852RUL',
      fileNumber: '036400000183054',
      color: 'GRAY/BLACK',
      yearModel: '2022',
      validityMonth: '02/2024',
      renewalWeek: '02/05/2024 - 02/11/2024',
      totalAmount: '675.25',
      totalAmountInWords: 'SIX HUNDRED SEVENTY FIVE PESOS AND 25/100 CENTAVO(S)'
    }
  }

  // Name: RIZZA SAVELIANA TRULOFF
  // TIN:
  // ADDRESS: HOPE VILLAS LANE BARRIO BARETTO OLONGAPO CITY REGION 3
  // CLIENT ID:
  // PLATE: 4838XO
  // FILE: 0308-00000079088
  // COLOR: BOLD BLACK
  // YEAR: 2011

  return (
    <div className={styles.app}>
      <img src='/assets/img/lto-logo.svg' className={styles.bgLogo} />
      <Header {...data.header} />
      <OfficeSection {...data.office} />
      <PersonalDetails {...data.personal} />
      <PaymentDetails {...data.payment} />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <div style={{ fontSize: '9px' }}>This is a system generate Official Receipt. No Signature needed.</div>
        <img src='/assets/img/barcode.png' />
      </div>
    </div>
  )
}

export default App
