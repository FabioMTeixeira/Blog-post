import { useState } from 'react';
import Header from '../../components/Header';
import './style.css';

function Main() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Header />
    </div>
  )
}

export default Main
