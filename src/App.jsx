import React, { useEffect, useState } from 'react'
import CurrencyRowUsd from './components/CurrencyRowUsd'
import CurrencyRowOther from './components/CurrencyRowOther'
import axios from 'axios'

const apiURL = 'https://api.ratesapi.io/api/latest'

export function App() {

  const [currencyOption, setCurrencyOption] = useState([])
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()


  console.log(exchangeRate)
console.log(currencyOption)
  useEffect(async () => {
    const resp = await axios .get(`${apiURL}?base=USD`)
    const secondCurrency = (resp.data.rates)[1]
    setCurrencyOption([(resp.data.rates)[1],...Object.keys(resp.data.rates)])
    setFromCurrency ((resp.data.rates)[0])
    setToCurrency(secondCurrency)
    setExchangeRate(resp.data.rates[secondCurrency])
    }, [])


  return (
    <>
      <header>
        <h1>Currency Converter</h1>
      </header>
      <CurrencyRowUsd
      currencyOption
      selectCurrency={fromCurrency}
      />
      <div className="equals">=</div>
      <CurrencyRowOther
      currencyOption={currencyOption}
      selectCurrency={toCurrency}
      onChangeCurrency={event => setToCurrency(event.target.value)}
      />
    </>
    )
}
