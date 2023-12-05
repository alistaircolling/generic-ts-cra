import axios from "axios";
import { DataRequest, DataResponse } from "../types/site";
import site from '../data/site.json'
import menu from '../data/menu.json'
import { useEffect, useState } from "react";


const useGetData = (request: DataRequest) => {
  const [data, setData] = useState<DataResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async (request: any) => {

      switch (request) {
        case 'site':
          return site
        case 'menu':
          return menu
        default:
          return null
      }
    }
    fetchData(request);
  }, [request])

  return { data, loading, error }
}

// const useGetData = async (dataRequest: DataRequest): Promise<DataResponse | undefined> => {
//   console.log('useGetData', dataRequest)

//   switch (dataRequest) {
//     case 'site':
//       return site
//     case 'menu':
//       return menu
//   }
// }

export { useGetData }


