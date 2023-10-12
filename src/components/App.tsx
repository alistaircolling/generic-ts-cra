import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import theme from '../styles/theme'
import { Site } from '../types/site'
import { useGetData } from '../hooks/useGetData'

const App: React.FC = () => {
  console.log('app---------------')

  const [data, setData] = useState<Site | undefined>(undefined)
  const site = useGetData('site') as unknown as Site
  // use the variable in the conditional statement
  // if (!data) {
  //   setData(site)
  // }
  useEffect(() => {
    if (!data) {
      setData(site)
    }
  }, [])

  return (
    <div className='App'>
      <div style={{ height: '100vh', width: '100vw', backgroundColor: theme.colors.primary }}>
        if (data)
        {
          <header>
            <h1 style={{ margin: 0, color: 'greenyellow', textAlign: 'center' }}>{data?.title}</h1>
            <div>
              <img src={logo} className='App-logo' alt='logo' />
            </div>
          </header>
        }{' '}
        else {<div>Loading....</div>}
        <div style={{ backgroundColor: theme.colors.primary }}>
          <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            hello, almost live coding into the browser!
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
