import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { useGetData } from '../hooks/useGetData'
import theme from '../styles/theme'
import { Site } from '../types/site'

const App: React.FC = () => {
  console.log('app---------------')

  const [data, setData] = useState<Site | undefined>(undefined)

  //TODO prevent running on each render
  useGetData('site').then((res) => setData(res as Site))

  return (
    <div className='App'>
      <div style={{ height: '100vh', width: '100vw', backgroundColor: theme.colors.primary }}>
        {data ? (
          <header>
            <h1 style={{ margin: 0, color: 'greenyellow', textAlign: 'center' }}>{data?.title}</h1>
            <div>
              <img src={logo} className='App-logo' alt='logo' />
            </div>
          </header>
        ) : (
          <div>Loading....</div>
        )}
        <div style={{ backgroundColor: theme.colors.primary }}>
          <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Hello
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
