import React from 'react'
import logo from './logo.svg'
import theme from '../styles/theme'
import { Site } from '../types/site'
import { useGetData } from '../hooks/useGetData'

const App: React.FC = () => {
  console.log('app---------------')
  const data: Site = useGetData('site') as unknown as Site
  console.log('data in app:', data)

  return (
    <div className='App'>
      <div style={{ height: '100vh', width: '100vw', backgroundColor: theme.colors.primary }}>
        <header>
          <h1 style={{ margin: 0, color: 'greenyellow', textAlign: 'center' }}>{data.title}</h1>
          <div>
            <img src={logo} className='App-logo' alt='logo' />
          </div>
        </header>
        <body>
          <div style={{ backgroundColor: theme.colors.primary }}>
            <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
              hello, almost live coding into the browser!
            </a>
          </div>
        </body>
      </div>
    </div>
  )
}

export default App
