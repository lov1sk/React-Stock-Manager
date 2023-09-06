import { Link, useNavigate } from "react-router-dom"
import {FormEvent, useContext } from "react"
import { api } from "../lib/api"
import HasChangedContext from "../contexts/HasChangedContext"
import { Form } from "../components/Form"


export function CreateItem(){
  const navigate = useNavigate()
  
  const hasChanged = useContext(HasChangedContext)
  {/** Função para guardar um item na api */}
   
  async function handleStoreItem(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)    
    
    await api.post('/item/new', {
      name: formData.get('nameItem'),
      category:formData.get('categoryItem'),
      description:formData.get('descriptionItem'),
      quantityOnStock: formData.get('qtdItem'),
      price:formData.get('priceItem'),
    }) 
    hasChanged?.setHasChanged(true)
    alert(`O item ${formData.get('nameItem')} foi cadastrado`)
    navigate('/items')
  }
  

  {/** Retorno do html */}
  return (
    <>
    <h1 style={{fontSize:'48px', fontWeight:'400'}}>Create a Item</h1>
    <div className="items-wrapper" style={{
        display: "flex",
        flexDirection: 'row',
        gap: '30px',
        padding:'20px 20px',
        
      }}>
        <p style={{paddingBottom:'5px'}}>Todos os itens</p>
        <Link to='/new' style={{borderBottom:'2px solid rgb(228 228 231)'}}>Novo Item</Link>
      </div>
    
    {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
    <Form handleSubmit={handleStoreItem} />
    </>
  )
}