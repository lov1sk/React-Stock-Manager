import { Link } from "react-router-dom"

export function RecentItems ({items}) {
  console.log(items);
  
  return (
    <div style={{
      width:'50%',
      display:'flex',
      flexDirection:'column',
    }}>
      <section style={{
        backgroundColor:'#121212',
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        padding:'20px 15px',
        
      }}> 
        <h4>Itens recentes</h4>
        <h4 style={{marginRight: '100px'}}>Ações</h4>
      </section>
      {items.map((item) => (
        <div 
        key={item._id}
        style={{
          margin:'30px 15px',
          display:'flex',
          flexDirection: 'row',
          justifyContent:'space-between',
          alignItems:'center',
        }}>
          <p>{item.name}</p>
          <Link 
            to={`/itemDetails/${item._id}`}
            className="link" 
            style={{
              borderRadius: '3px',
              backgroundColor: 'rgb(228 228 231)',
              color: 'rgb(28 25 23)',
              border: '0px',
              padding: '10px 20px',
              marginRight:'90px'
            }}>Ver</Link>
      </div>
      ))}
      
    </div>
  )
}