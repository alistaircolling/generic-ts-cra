import axios from "axios";
import { DataRequest, DataResponse } from "../types/site";
import site from '../data/site.json'
import menu from '../data/menu.json'


const useGetData = async (dataRequest: DataRequest): Promise<DataResponse | undefined> => {
  console.log('useGetData', dataRequest)

  switch (dataRequest) {
    case 'site':
      return site
    case 'menu':
      return undefined
  }
}

export { useGetData }


