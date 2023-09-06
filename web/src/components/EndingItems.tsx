import { Link } from "react-router-dom"
import { Items } from "../pages/RootLayout";


export function EndingItems (props:{items:Items[]}) {
  const {items} = props
  
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      width:'50%'
    }}>
      <section style={{
        backgroundColor:'#121212',
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'20px 15px',
        
        
      }}> 
      <h4>Itens Acabando</h4>
      <h4>Qtd.</h4>
      <h4 style={{marginRight: '80px'}}>Ações</h4>
    
      </section>
      
      {items.length > 0 ? items.map(item => {
        return (
          <div 
            key={item._id}
            style={{
              margin:'30px 15px',
              display:'flex',
              flexDirection: 'row',
              justifyContent:'space-between',
              alignItems:'center',
            }}>
              <p style={{width:'30%'}}>{item.name}</p>
              <p style={{marginRight:'40px'}}>{item.quantityOnStock}</p>
              <Link 
                to={`/itemDetails/${item._id}`}
                className="link" 
                style={{
                  borderRadius: '5px',
                  backgroundColor: 'rgb(228 228 231)',
                  color: 'rgb(28 25 23)',
                  border: '0px',
                  padding: '10px 20px',
                  marginRight: '70px'  
                }}>Ver</Link>
          </div>
        )}) : null }
    
    </div>

  )
}