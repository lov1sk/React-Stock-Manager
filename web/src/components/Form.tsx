import { FormEvent } from "react"

interface formFunction {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  formValues?:{
    _id: string,
    name: string,
    category: string,
    description: string,
    quantityOnStock: number,
    price: number
  }
}

export function Form(props:formFunction){
  const {handleSubmit,formValues} = props
  return(
    <form onSubmit={handleSubmit}>
      <div style={{
        padding:'20px 150px',
        display:'grid', 
        gridTemplateColumns:'1fr 1fr 1fr 1fr',
        gap: '10px 30px'
        }}>
      <label htmlFor="nameItem" style={{marginLeft:'5px'}}>Nome</label>
      <label htmlFor="qtdItem" style={{marginLeft:'5px'}}>Quantidade</label>
      <label htmlFor="priceItem" style={{marginLeft:'5px'}}>Preço</label>
      <label htmlFor="categoryItem" style={{marginLeft:'5px'}}>Categoria</label>
     

      <input type="text" autoComplete="off" name="nameItem" id="nameItem" defaultValue={formValues?.name} required />
      <input type="number" name="qtdItem" id="qtdItem" defaultValue={formValues?.quantityOnStock} required />
      <input type="text" autoComplete="off" name="priceItem" id="priceItem" defaultValue={formValues?.price} required />
      <select id="categoryItem" name="categoryItem" defaultValue={formValues?.category}>
        <option value="Smartphone">Smartphone</option>
        <option value="Smartwatch">Smartwatch</option>
        <option value="Notebook">Notebook</option>
        <option value="TV">TV</option>
        <option value="Radio">Radio</option>
        <option value="PC">PC</option>
      </select>
      </div>
      {/* topo | direita | inferior | esquerda */}
      <label htmlFor="descriptionItem" style={{marginLeft: '155px'}}>Descrição</label>
    
      {/* top-left | top-right | bottom-right | bottom-left 
border-radius: 1px 0 3px 4px;*/}
      <textarea 
      name="descriptionItem" 
      id="descriptionItem" 
      defaultValue={formValues?.description}
      style={{
        backgroundColor:'#1a1a1a',
        border:'none',
        borderRadius:'1px 1px 40px 2px',
        width:'78%',
        height:'200px',
        margin: '10px 150px',
        padding:'10px 20px ',
        fontSize:'16px',
        fontWeight:'bold',
        resize:'none'
        }}  />
        <button 
        type="submit" 
        style={{
          marginLeft: '155px',
          borderRadius: '3px',
          backgroundColor: 'rgb(37 99 235)',
          color: 'rgb(28 25 23)',
          border: '0px',
          padding: '10px',
          }}
          >Salvar</button>
    </form>
  )
}