import React from 'react'

export default function CurrencyRowUsd(props) {
  const {
    selectCurrency,
    onChangeAmount,
    onChangeDecimal,
    amount
  } = props

return (
  <div>
    <input type="number" value={amount} onChange={onChangeAmount}/>
    <select value={selectCurrency}>
      <option value="usd">USD</option>
    </select>
  </div>
)
}