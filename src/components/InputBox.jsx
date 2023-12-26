function InputBox({
    label,
    amount ,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable =false,
    currencyDisable = false,

}){
    return(
        <>
        
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">{label}</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" value={amount} disabled={amountDisable} onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}/>
<select class="form-select" aria-label="Default select example" value={selectCurrency} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}>
  {
    currencyOption.map((currency)=>{
      <option  key={currency} value={currency}>{currency}</option>

    })
  }

</select>
</div>

        </>
    )
}
export default InputBox;
