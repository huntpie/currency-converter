import React from 'react'

export default function CurrencyRowOther(props) {
  const {
    currencyOption,
    selectCurrency,
    onChangeCurrency,
    amount
  } = props
return (
  <div>
    <input type="number" className="input"/>
    <select value={selectCurrency} onChange={onChangeCurrency}>
      {currencyOption.map(option => 
        <option key={option} value={option}>{option}</option>
        )}
      
    </select>
  </div>
)
}