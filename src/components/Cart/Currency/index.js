import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CURRENCY } from '../../../helpers/API/queries'
import Select from '../../Shared/Select'

export default function CurrencyDropdown({ updateCurrency }) {  
  const defaultCurrency = ['USD', 'MXN', 'CAD']
  const { data, loading, error } = useQuery(CURRENCY, {
    variables: { currency: 'USD' }
  })
  const currency = loading || error ? defaultCurrency : data.currency;
  console.log(currency)
  return (
    <>
      <Select 
        classList="select--no-border"
        options={currency}
        changeEvent={updateCurrency}
      />
    </>
  )
}