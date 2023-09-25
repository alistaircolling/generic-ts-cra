import React from 'react'
import logo from './logo.svg'
import { ThemeUIProvider } from 'theme-ui'
import theme from './styles/theme'

function App() {
  return (
    <ThemeUIProvider theme={theme}>
      <div className='App'>
        <div style={{ height: '100vh', width: '100vw', backgroundColor: theme.colors.primary }}>
          <header>
            {/* <img src={logo} className='App-logo' alt='logo' /> */}
            {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
            <div style={{ backgroundColor: theme.colors.primary }}>
              <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
                hello, almost live coding into the browser!
              </a>
            </div>
          </header>
        </div>
      </div>
    </ThemeUIProvider>
  )
}

export default App
