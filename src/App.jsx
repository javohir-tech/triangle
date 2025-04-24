import { useState } from 'react'
import './App.css'

function App() {
  const [a, setBirinchi] = useState(0);
  const [b, setIkkinchi] = useState(0);
  const [c, setUchinchi] = useState(0)
  console.log(a)
  console.log(b)
  console.log(c)
  const [natija, setNatija] = useState(0)

  // const canculate = (e) => {
  //   if (a + b > c && a + c > b && c + b > a) {
  //     e.preventDefault()
  //     const preimetr = (a + b + c) / 2
  //     const yuza = Math.sqrt(preimetr * (preimetr - a) * (preimetr - c) * (preimetr - b))
  //     setNatija(yuza*25)
  //   }else{
  //     alert('tomonlariga qaraganda bu uchburchak shartini bajara olmaydi')
  //   }
  // }
  const canculate = (e) => {
    e.preventDefault();
  
    const realA = a * 500;
    const realB = b * 500;
    const realC = c * 500;
  
    if (realA + realB > realC && realA + realC > realB && realC + realB > realA) {
      const p = (realA + realB + realC) / 2;
      const yuzaSm = Math.sqrt(p * (p - realA) * (p - realB) * (p - realC));
      const yuzaM = yuzaSm / 10000; // sm² -> m²
      setNatija(yuzaM);
    } else {
      alert('Tomonlar bu uchburchakni tashkil eta olmaydi');
    }
  };
  
  console.log(natija)

  return (
    <>
      <div className='container'>

        <form onSubmit={canculate} className='d-flex flex-column justify-content-center mt-5'>
          <div className=''>
            <div className=''>
              <label className='form-label'>1tomon</label>
              <input onChange={(e) => setBirinchi(Number(e.target.value))} required step="any" type="number" className='form-control' />
            </div>
            <div className=''>
              <label className='form-label'>2tomon</label>
              <input onChange={(e) => setIkkinchi(Number(e.target.value))} required step="any" type="number" className='form-control' />
            </div>
            <div className=''>
              <label className='form-label'>3tomon</label>
              <input onChange={(e) => setUchinchi(Number(e.target.value))} required step="any" type="number" className='form-control' />
            </div>
          </div>
          <button className='btn btn-primary mt-3' type='submit'>Hisoblash</button>
        </form>
        <h1 className='text-center mt-3'>Natija : {natija}</h1>
      </div>
    </>
  )
}

export default App
