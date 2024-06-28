
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle , setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest]=useState(0)
  const [isPrinciple,setIsPrinciple] =useState(true)
  const [isRate ,setIsRate] =useState(true)
  const [isYear ,setIsYear] = useState(true)
  const validate = (e)=>{
    const name =e.target.name 
    const value = e.target.value 
    // console.log(name,value);
    // console.log(!!value.match(/^[0-9]*$/));
    if(!!value.match(/^[0-9]*$/)){
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if(name=='rate'){
        setRate(value)
       setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else{
    if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }

  }

  }

  const handleReset =()=>{
     setPrinciple(0)
     setRate(0)
     setYear(0)
     setInterest(0)
     setIsPrinciple(true)
     setIsRate(true)
     setIsYear(true)
  }
  const hanldeCalculate=(e)=>{
    e.preventDefault()
    if(principle=="" || rate==""  ||year==""){
      alert('please fill the form completely')
    }
    else{
      setInterest((principle*rate*year)/100)
    }
  }
 
  return (
    <>
    <div style={{backgroundImage:'URL(https://i0.wp.com/calmatters.org/wp-content/uploads/2021/08/math-curriculum.jpg?fit=1200%2C900&ssl=1)',height:'100vh'}}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 rounded bg-light mt-5" >
          <h1 className='text-center mt-3'>Simple Interest App</h1>
          <h2 className='text-center'>Calculate Your Simple Interest Easily</h2>
          <div className='bg-warning mt-5 d-flex justify-content-center align-items-center flex-column' style={{height:'150px',width:'100%'}}>
            <h1 id='' className='text-dark'>₹ {interest}</h1> 
            <h2 className='text-center'>Total Simple Interest</h2>

          </div>
          <form className='mt-4' onSubmit={hanldeCalculate}>
            <div className="mb-3">
            <TextField id="outlined-basic" label="₹ Principle amount" value={principle || ""} onChange={(e)=>validate(e)} name='principle' variant="outlined" style={{width:'100%'}}/>
          { !isPrinciple &&
            <p className='text-danger'>*invalid output</p>}
            </div>
            <div className="mb-3">
            <TextField  id="outlined-basic" label="Rate of interest" value={rate || ""} onChange={(e)=>validate(e)} name='rate'  variant="outlined"style={{width:'100%'}} />
           { !isRate &&
            <p className='text-danger'>*invalid output</p>}
            </div>
            <div className="mb-3">
            <TextField id="outlined-basic" label="year" value={year || ""} onChange={(e)=>validate(e)} name='year' variant="outlined"style={{width:'100%'}} />
          { !isYear &&
           <p className='text-danger'>*invalid output</p>}
            </div>
            <div className="mb-3 d-flex justify-content-center align-items-center flex-row">
            <Button variant="contained" type='submit' className='me-5 mt-3' style={{height:'70px',width:'200px'}} disabled={isPrinciple && isRate && isYear? false:true} onClick={hanldeCalculate} >Calculate</Button>
            <Button variant="outlined" className='mt-3' style={{height:'70px',width:'200px'}} onClick={handleReset}>Reset</Button>
            </div>

            
           

          </form>
        </div>
        <div className="col-md-3"></div>
      </div>





    </div>
      
      
    </>
  )
}

export default App
