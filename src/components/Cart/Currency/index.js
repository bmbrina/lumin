import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CURRENCY } from '../../../helpers/API/queries'
import Select from '../../Shared/Select'

export default function CurrencyDropdown({ disableDropdown, errorState, updateCurrency }) {  
  const defaultCurrency = ['USD', 'MXN', 'CAD']
  const { data, loading, error } = useQuery(CURRENCY, {
    variables: { currency: 'USD' }
  })
  const currency = loading || error ? defaultCurrency : data.currency;
  const errorClass = errorState ? 'select--error': ''
  const disabled = disableDropdown ? 'disabled' : ''
  return (
    <>
      <Select 
        classList={`${errorClass}`}
        disabled={disabled}
        options={currency}
        changeEvent={updateCurrency}
      />
    </>
  )
}