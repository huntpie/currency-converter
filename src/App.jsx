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


 

  useEffect(async () => {
    const resp = await axios .get(`${apiURL}?base=USD`)
    const firstCurrency = (resp.data.rates)[0]
    setCurrencyOption([resp.data.base,...Object.keys(resp.data.rates)])
    setFromCurrency (resp.data.base)
    setToCurrency(firstCurrency)
    setExchangeRate(resp.data.rates[firstCurrency])
    console.log(resp.data)
    console.log(exchangeRate)
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
