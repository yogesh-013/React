import { useState } from 'react'

import CurrencyInfo from './hooks/currencyInfo';
import InputBox from './components/InputBox';



function App() {
  const [amount , setAmount] = useState(0)
  const [result , setResult] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const currencyDet = CurrencyInfo(from)
  const currencyInfor = Object.keys(currencyDet)
  const convert = function(){
    setResult(amount*currencyDet[to])
  }
  function swap(){
    setFrom(to)
    setTo(from)
    setAmount(result)
    setResult(amount)
  }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount = {amount}
                              onAmountChange={(value)=>{
                                setAmount(value)
                               
                              }}
                              currencyOption = {currencyInfor}
                              onCurrencyChange={(value)=>setFrom(value)}
                              selectCurrency={from}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick = {swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount = {result}
                              
                              currencyOption = {currencyInfor}
                              onCurrencyChange={(value)=>setTo(value)}
                              selectCurrency={to}
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}
export default App
