import { Link,useNavigate,useParams } from "react-router-dom"
import { FormEvent, useContext } from "react";
import ItemContext from '../contexts/ItemsContext'
import { api } from "../lib/api";
import HasChangedContext from "../contexts/HasChangedContext";
import { Form } from "../components/Form";

export function UpdateItem(){
  const itemsRepo = useContext(ItemContext)
  const hasChanged = useContext(HasChangedContext)
  const navigate = useNavigate()
  const {itemId} = useParams()
  

  const item =  itemsRepo.find(item => item._id == itemId)

  async function handleUpdateItem(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    
    await api.put(`/item/${item?._id}`,{
      name: formData.get('nameItem'),
      category:formData.get('categoryItem'),
      description:formData.get('descriptionItem'),
      quantityOnStock: formData.get('qtdItem'),
      price:formData.get('priceItem'),
    })        
    hasChanged?.setHasChanged(true)
    alert(`O item ${formData.get('nameItem')} foi atualizado!`)
    navigate('/items')
  }
  
  return(
    <>
    <h1 style={{fontSize:'48px', fontWeight:'400'}}>Update a Item</h1>
    <div className="items-wrapper" style={{
        display: "flex",
        flexDirection: 'row',
        gap: '30px',
        padding:'20px 20px',
        
      }}>
        <p style={{paddingBottom:'5px'}}>Todos os itens</p>
        <Link to='/new'>Novo Item</Link>
      </div>
      <h3> Item: {item?.name}</h3>
    
    <Form handleSubmit={handleUpdateItem} formValues={item}/>
    </>
  )
}