'use client'

import { useState } from 'react'

export default function Counter({
  dictionary,
}: {
  dictionary: {
    increment: string
    decrement: string
  }
}) {
  const [count, setCount] = useState(0)
  return (
    <div className='flex gap-7 items-center justify-center m-4'>
      <p className='text-lg text-gray-300'>Your cart:</p>
      <button onClick={() => setCount((n) => n + 1)}>
        {dictionary.increment}
      </button>
      {count}
      <button onClick={() => setCount((n) => n - 1)}>
        {dictionary.decrement}
      </button>
    </div>
  )
}
