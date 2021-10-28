import '@styles/globals.css'
import type { AppProps } from 'next/app'
import {DivisionContext} from '@context/state'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [division, setDivision] = useState('')

  return (
  <DivisionContext.Provider value={{division,setDivision}}>
    <Component {...pageProps} />
    {division}
  </DivisionContext.Provider>
  )
}

export default MyApp
