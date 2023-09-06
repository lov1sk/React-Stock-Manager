import { useContext } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import ItemsContext from "../contexts/ItemsContext"
import HasChangedContext from "../contexts/HasChangedContext"
import { api } from "../lib/api"
import dayjs from "dayjs"

export function ItemDetails() {
  const items = useContext(ItemsContext)
  const hasChanged = useContext(HasChangedContext)
  const navigate = useNavigate()
  const {itemId} = useParams()

  const item = items.find(item => item._id == itemId)

  async function handleDeleteItem(id,name): Promise<void> {
    await api.delete(`/item/${id}`)
    hasChanged?.setHasChanged(true)
    alert(`O item ${name} foi excluido!`)
    navigate('/items')
  }

  return(
    <>
    {item ? (
      <> 
       <h1 style={{fontSize:'48px', fontWeight:'400'}}>Item: {item.name}</h1>
       <div className="items-wrapper" style={{
         display: "flex",
         flexDirection: 'row',
         gap: '30px',
         padding:'20px 20px',
       }}>
         <p style={{borderBottom:'2px solid rgb(228 228 231)', paddingBottom:'5px'}}>Todos os itens</p>
         <Link to='/new'>Novo Item</Link>
       </div>
       <div style={{
         display:'flex',
         flexDirection:'row',
         alignItems:'center',
         gap: '15px',
       }}>
         <p>{item.name}</p>
         <Link 
         to={`/update/${item._id}`} 
         className="link"
         style={{
                 borderRadius: '3px',
                 backgroundColor: 'rgb(228 228 231)',
                 color: 'rgb(28 25 23)',
                 border: '0px',
                 padding: '10px',
 
               }}>Atualizar</Link>
               <button 
               onClick={() => handleDeleteItem(item._id, item.name)}
               style={{
                 borderRadius: '3px',
                 backgroundColor: 'rgb(220 38 38)',
                 color: 'rgb(28 25 23)',
                 border: '0px',
                 padding: '14px',
                 fontSize:'16px'
               }}>Excluir</button>
       </div>
       {/** item info wrapper */}
       <div style={{
         marginTop:'20px',
         display:'flex',
         flexDirection:'row',
         gap:'15px'
 
       }}>
         <p style={{backgroundColor:"#121212", padding: '15px 30px', borderRadius:'6px'}}>Categoria: {item.category}</p>
         <p style={{backgroundColor:"#121212", padding: '15px 30px', borderRadius:'6px'}}>Quantidade em estoque: {item.quantityOnStock}</p>
         <p style={{backgroundColor:"#121212", padding: '15px 30px', borderRadius:'6px'}}>Preço: R$: {item.price}</p>
       </div>
 
       <p style={{margin: '20px 0'}}>{item.description}</p>
       <p>
         Cadastrado em: { dayjs(item.createdAt).format('HH:mm [-] DD [de] MMM[,] YYYY')} <span style={{marginLeft:'50px'}}>Atualizado em: { dayjs(item.updatedAt).format('HH:mm [-] DD [de] MMM[,] YYYY')}</span>
       </p>
       
     </>
    ) : (<h1>Error</h1>)}
     </>
  )  
}