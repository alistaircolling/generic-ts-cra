import React from 'react'
import { useGetData } from '../hooks/useGetData'
import { MenuData } from '../types/site'

const Menu: React.FC = () => {
  const { data, error, loading } = useGetData('menu')

  if (error) return <div>Error</div>
  if (data)
    return (
      <div>
        <ul>
          {(data as MenuData).items.map((item: any) => (
            <li key={item.id}>
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  return <div>Loading..</div>
}

export default Menu
