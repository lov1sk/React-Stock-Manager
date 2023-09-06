import { Link, useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import { useContext } from "react";
import HasChangedContext from "../contexts/HasChangedContext";

export function Table(props) {
  const {data} = props
  const hasChanged = useContext(HasChangedContext)
  const navigate = useNavigate()

  async function handleDeleteItem(id,name): Promise<void> {
    await api.delete(`/item/${id}`)
    hasChanged?.setHasChanged(true)
    alert(`O item ${name} foi excluido!`)
    navigate('/items')
  }
  
  return (
      <table>
        <thead >
          <tr style={{
          textAlign:"left",
          backgroundColor:'#121212', 
          }}>
            <th style={{padding: '15px 25px'}}>ID</th>
            <th style={{paddingLeft:'20px'}}>Nome</th>
            <th style={{paddingLeft:'20px'}}>Em estoque</th>
            <th style={{paddingLeft:'20px'}}>Categoria</th>
            <th style={{paddingLeft:'20px'}}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item =>(
            <tr key={item._id}>
            <td style={{paddingLeft: '20px'}}>{item._id}</td>
            <td style={{paddingLeft: '20px'}}>{item.name}</td>
            <td style={{paddingLeft: '20px'}}>{item.quantityOnStock}</td>
            <td style={{paddingLeft: '20px'}}>{item.category}</td>
            <td style={{
              padding: '15px 5px',
              paddingLeft: '10px',
              display:"flex",
              flexDirection:'row',
              gap:' 10px'
            }}> 
              <Link 
              to={`/itemDetails/${item._id}`}
              className="link" 
              style={{
                borderRadius: '3px',
                backgroundColor: 'rgb(37 99 235)',
                color: 'rgb(28 25 23)',
                border: '0px',
                padding: '10px',

              }}>Ver</Link>
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
              onClick={() =>handleDeleteItem(item._id,item.name)}
              style={{
                borderRadius: '3px',
                backgroundColor: 'rgb(220 38 38)',
                color: 'rgb(28 25 23)',
                border: '0px',
                padding: '10px',
                fontSize:'16px'

              }}>Excluir</button>
              </td>
          </tr>
          ))}
          
          
        </tbody>
      </table>
  )
}