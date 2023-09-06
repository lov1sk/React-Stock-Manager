import {Link} from 'react-router-dom'

export function Header() {
  return (
    <header style={{
      padding:'10px 40px',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    }}>
      <Link to='/'
      className="navLink"
      style={{
        fontWeight:'700',
        fontSize:'18px'
      }}
      >REACT STOCK</Link>
      <nav style={{
        display:'flex',
        gap:'15px'
      }}>
        <Link to="/" className="navLink">Inicio</Link>
        <Link to="/items" className="navLink">Itens</Link>  
      </nav>
    </header>
  )
}