import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import { useGetData } from '../hooks/useGetData'
import theme from '../styles/theme'
import { DataResponse, Site } from '../types/site'
import { Box, Container, Link, Typography } from '@mui/material'
import Nav from './Nav'

const App: React.FC = () => {
  console.log('app---------------')

  const { data, error, loading } = useGetData('site')

  if (error) return <div>Error</div>
  console.log('data', data)

  return (
    <Box className='App' style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw' }}>
      <Nav />
      <Box style={{ flex: 1, backgroundColor: theme.colors.primary }}>
        {data ? (
          <header>
            <Typography variant='h1' style={{ margin: 0, color: 'greenyellow', textAlign: 'center' }}>
              {(data as Site)?.title}
            </Typography>
            <Container>
              <img src={logo} className='App-logo' alt='logo' />
            </Container>
          </header>
        ) : (
          <Typography variant='h3'>Loading....</Typography>
        )}
      </Box>
      <Container style={{ width: '100%', color: 'greenyellow', backgroundColor: theme.colors.primary }}>
        <Link href='https://google.com' target='_blank' rel='noopener noreferrer'>
          <Typography variant='h3'>Hello</Typography>
        </Link>
      </Container>
    </Box>
  )
}

export default App
