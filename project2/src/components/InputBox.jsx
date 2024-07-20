import React , {useId} from "react"
function InputBox({
    label,
    amount ,
    onAmountChange , 
    currencyOption ,
    onCurrencyChange,
    selectCurrency , 

    className = "",
}) {
   const id1 = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={id1} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                id = {id1}
                    value = {amount}
                    onChange={(e)=> onAmountChange(Number(e.target.value))}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                value = {selectCurrency}
                onChange={(e)=>onCurrencyChange(e.target.value)}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                >
                    {currencyOption.map((currency)=>(
                        <option key = {currency} value = {currency}>{currency}</option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;