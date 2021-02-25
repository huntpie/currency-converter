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

 
  

  function handleFromAmountChange(event) {
    setAmount(event.target.value)
  }
  function handleToAmountChange(event) {
    setAmount(event.target.value)
  }

 

  useEffect(async () => {
    const resp = await axios .get(`${apiURL}?base=USD`)
    setCurrencyOption([null, ...Object.keys(resp.data.rates)])
    setFromCurrency (resp.data.base)

      if(fromCurrency && toCurrency != null ){
      setExchangeRate(resp.data.rates[toCurrency])
      }
    }, [fromCurrency, toCurrency])

  let fromAmount = amount
  let toAmount = (amount * exchangeRate).toFixed(2)

  return (
    <>
      <header>
        <h1>Currency Converter</h1>
      </header>
      <CurrencyRowUsd
      selectCurrency={fromCurrency}
      amount={fromAmount}
      onChangeAmount={handleFromAmountChange}
      />
      <div className="equals">=</div>
      <CurrencyRowOther
      currencyOption={currencyOption}
      selectCurrency={toCurrency}
      amount={toAmount}
      onChangeAmount={handleToAmountChange}
      onChangeCurrency={event => setToCurrency(event.target.value)}
      />
    </>
    )
}
