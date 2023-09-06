import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { AxiosResponse } from "axios";
import ItemContext from '../contexts/ItemsContext'
import HasChangedContext from "../contexts/HasChangedContext";

export interface Items {
  _id: string;
  name: string;
  category: string;
  description: string;
  quantityOnStock: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number
}
export function RootLayout() {
const[items,setItems] = useState<Items[]>([])
const[hasChanged,setHasChanged] = useState(false)

useEffect (()=>{
  api.get <Items[]>('items')
  .then((response: AxiosResponse) => {
    const data = response?.data
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setItems(data.result)
  })
  .catch(error => console.log(error))
  .finally(() => setHasChanged(false))
},[hasChanged])

  return (
    <>
      <Header />
      <main style={{
      padding:'0 40px',
      display:'flex',
      flexDirection: 'column',
      flexGrow:'1',
    }}>
      <ItemContext.Provider value={items}>
        <HasChangedContext.Provider value={{hasChanged,setHasChanged}}>
          <Outlet />
        </HasChangedContext.Provider>
      </ItemContext.Provider>
      </main>
      <Footer />
    </>
  )
}