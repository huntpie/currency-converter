import React from 'react'

export default function CurrencyRowUsd(props) {
  const {
    selectCurrency,
    amount
  } = props

return (
  <div>
    <input type="number" />
    <select value={selectCurrency}>
      <option value="usd">USD</option>
    </select>
  </div>
)
}