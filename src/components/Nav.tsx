import React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
import { useGetData } from '../hooks/useGetData'
import { MenuData } from '../types/site'

const Nav: React.FC = () => {
  const { data, error, loading } = useGetData('menu')

  if (error) return <div>Error</div>
  if (loading) return <div>Loading...</div>
  if (data) {
    return (
      <AppBar position='static'>
        <Toolbar>
          {(data as MenuData).items.map((item: any) => (
            <Button color='inherit' href={item.path} key={item.id}>
              {item.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    )
  }

  return null
}

export default Nav
