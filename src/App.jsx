import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  // state for checking is field values are valid
  const [isPrinciplieValid, setIsPrinciplieValid] = useState(true)
  const [isRateValid, setIsRateValid] = useState(true)
  const [isYearValid, setIsYearValid] = useState(true)


  const validateFun=(e)=> {
    const input_field = e.target.name
    const input_value = e.target.value
    console.log(input_field, input_value);
    if (input_value.match(/^[0-9]*$/)) {
      console.log("input is valid");
      if (input_field === "principle_amount") {
        setIsPrinciplieValid(true)
        setPrinciple(input_value)
      }
      else if (input_field === 'rate_interest') {
        setIsRateValid(true)
        setRate(input_value)
      }
      else if (input_field === 'num_years') {
        setIsYearValid(true)
        setYear(input_value)
      }
    }
    else {
      console.log("given value is invalid");
      if (input_field === "principle_amount") {
        setIsPrinciplieValid(false)
        setPrinciple(input_value)

      }
      else if (input_field === 'rate_interest') {
        setIsRateValid(false)
        setRate(input_value)
      }
      else if (input_field === 'num_years') {
        setIsYearValid(false)
        setYear(input_value)
      }

    }
  }
  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("principle",principle);
    console.log("rate",rate);
    console.log("Year",year);
    if(principle=='' ||rate===''||year===''){
      alert("please enter all value")
    }
    else{
      const result=(principle*rate*year)/100
      setInterest(result)
    }
  }
  const handleReset=(e)=>{
    setInterest(0)
    setPrinciple('')
    setRate('')
    setYear('')
    
  }
  return (
    <>
      <div style={{ backgroundColor: "black", height: '100vh' }}
        className="d-flex justify-content-center align-items-center">
        <div style={{ backgroundColor: 'white', width: "500px" }} className="rounded p-5">
          <h2>Simple Interest</h2>
          <p>Calculte your simple interest Easily</p>
          <div style={{ backgroundColor: "orange", height: '150px', borderRadius: '5px' }} className="d-flex justify-content-center 
          align-items-center flex-column shadow">
            <h2 className="fw-bold">&#8377; {interest}</h2>
            <p className="fw-bold">Total Simple Interest</p>
          </div>
          <form action="" className="mt-4" onSubmit={handleCalculate}>
            <div className='mb-3'>
              <TextField id="outlined-basic" label="Principle" variant="outlined" name='principle_amount'
                onChange={(e) => validateFun(e)} className='w-100' value={principle||""}/>
              {
                !isPrinciplieValid && <p style={{ color: 'red' }}>invalid input</p>
              }
            </div>
            <div className='mb-3'>
              <TextField id="outlined-basic" label="Rate Of Interest" variant="outlined" name='rate_interest'
                onChange={(e) => validateFun(e)} className='w-100' value={rate}/>
              {
                !isRateValid && <p style={{ color: 'red' }}>invalid input</p>
              }
            </div>
            <div className='mb-3'>
              <TextField id="outlined-basic" label="No: Years" variant="outlined" name='num_years'
                onChange={(e) => validateFun(e)} className='w-100' value={year} />
              {
                !isYearValid && <p style={{ color: 'red' }}>invalid input</p>
              }
            </div>
            <div>

            </div >
            <div className='d-flex justify-content-around mb-3'>
              <Button variant="contained" color="success" style={{ width: "190px", padding: '10px' }}
                disabled={!isPrinciplieValid || !isRateValid || !isYearValid} type='submit'>CALCULATE</Button>
              <Button variant="outlined" style={{ width: "190px", padding: '10px' }} onClick={handleReset}>RESET</Button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
