import { Link } from "react-router-dom";
import { Table } from "../components/Table";
import { useContext } from "react";
import ItemContext from '../contexts/ItemsContext'

export function StockItems() {
  const items = useContext(ItemContext)
  
  
  return (
    <>
      <h1 style={{fontSize:'48px', fontWeight:'400'}}>Stock Items</h1>
      <div className="items-wrapper" style={{
        display: "flex",
        flexDirection: 'row',
        gap: '30px',
        padding:'20px 20px',
        
      }}>
        <p style={{borderBottom:'2px solid rgb(228 228 231)', paddingBottom:'5px'}}>Todos os itens</p>
        <Link to='/new' className="navLink">Novo Item</Link>
      </div> {/*eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      {items.length != 0 ? <Table data={items}/> : (
        <div style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          gap:'16px',
          height:'100%',
          width:'100%'}}>
          <h1>Não ha itens</h1>
        </div>
      
      )}
      
    </>
  )
}