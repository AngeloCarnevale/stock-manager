import { useState } from 'react'
import {Button, Header} from '@repo/ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title='STOCK MANAGER'/>
      <h1 className='text-red-500'>Stock</h1>
    </>
  )
}

export default App
