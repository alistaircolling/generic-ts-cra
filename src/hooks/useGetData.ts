import axios from "axios";
import { DataRequest, DataResponse } from "../types/site";




const useGetData = async (dataRequest: DataRequest): Promise<DataResponse> => {

  //TODO add cms
  const url: string = `./data'${dataRequest}.json`
  const response = await axios.get(url)
  console.log('response', response)
  const data = JSON.parse(JSON.stringify(response.data))
  console.log('data', data)
  return data as DataResponse
}

export { useGetData }