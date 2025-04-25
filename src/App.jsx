import { useState } from 'react'
import './App.css'

function App() {
  const [a, setBirinchi] = useState(0);
  const [b, setIkkinchi] = useState(0);
  const [c, setUchinchi] = useState(0)
  const [natija, setNatija] = useState(0);
  const [umummiy, setUmummiy] = useState([])
  const [result, setResult] = useState(0)
  console.log(umummiy)

  const yuzaniHammasi = () => {
    let result = 0;

    for (let i = 0; i < umummiy.length; i++) {
      result += umummiy[i].val
    }
    setResult(result)
  }

  const canculate = (e) => {
    if (a + b > c && a + c > b && c + b > a) {
      e.preventDefault()
      const preimetr = (a + b + c) / 2
      const yuza = Math.sqrt(preimetr * (preimetr - a) * (preimetr - c) * (preimetr - b))
      setNatija(yuza)
      setUmummiy(prev => [...prev, { id: prev.length + 1, val:Number(yuza.toFixed(3)) , i: a, j: b, k: c }]);
    } else {
      alert('tomonlariga qaraganda bu uchburchak shartini bajara olmaydi')
    }
  }

  const Remove = (id) => {
    setUmummiy(prev => prev.filter(item => item.id !== id))
  }
  // const canculate = (e) => {
  //   e.preventDefault();

  //   const realA = a * 500;
  //   const realB = b * 500;
  //   const realC = c * 500;

  //   if (realA + realB > realC && realA + realC > realB && realC + realB > realA) {
  //     const p = (realA + realB + realC) / 2;
  //     const yuzaSm = Math.sqrt(p * (p - realA) * (p - realB) * (p - realC));
  //     const yuzaM = yuzaSm / 10000; // sm² -> m²
  //     setNatija(yuzaM);
  //   } else {
  //     alert('Tomonlar bu uchburchakni tashkil eta olmaydi');
  //   }
  // };

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

        <div className='mt-3'>
          <p>Yuzalar: </p>
          {umummiy.map((item) => {
            return <div key={item.id} className='d-flex align-item-center justify-content-between mb-3'>
              <div className='d-flex align-items-center '>
                <h2 className='mb-0 me-3'>S{item.id}:</h2>
                <p className='mb-0'>{item.i}*{item.j}*{item.k}={item.val}</p>
              </div>
              <button className='btn btn-danger' onClick={() => Remove(item.id)} >O'chirish</button>
            </div>
          })}
        </div>
        <button className='btn btn-primary w-100' onClick={yuzaniHammasi}>barcha yuzani hisobla</button>
        <div className='mt-3'>
          <h1>{result}</h1>
        </div>
        <button className='btn btn-danger w-100' onClick={() => { setUmummiy([]) }}>Tozala</button>
      </div>
    </>
  )
}

export default App
