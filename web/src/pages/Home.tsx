import dayjs from 'dayjs'
import relativeTime from'dayjs/plugin/relativeTime' 
import { EndingItems } from '../components/EndingItems'
import { Indicator } from '../components/Indicator'
import { RecentItems } from '../components/RecentItems'
import ItemsContext from '../contexts/ItemsContext'
import { useContext} from 'react'
import { Items } from './RootLayout'
dayjs.extend(relativeTime)



export function Home() {
  const items = useContext(ItemsContext)
  const qtdTotal = items.reduce((acc,item) => acc + item.quantityOnStock,0)
  const lowQuantityItems = items.filter(item => item.quantityOnStock < 10) 
  const differentItems = items.length
  const recentItems = items.map(item => ({
    ...item,
    isRecent: isRecent(item)
  }))
  
  function isRecent(item: Items) {
      const today = dayjs(new Date()).format('YYYY-MM-DD')
      const itemCreatedDay = dayjs(item.createdAt).format('YYYY-MM-DD')
      const diference = dayjs(today).diff(itemCreatedDay, 'days')
      
      if (diference < 1) {
        return true
      }
      return false
  }
  
  
  return (
    <>
      <h1 style={{fontSize:'48px', fontWeight:'400'}}>Dashboard</h1>
      {/** Indicadores */}
      <div style={{
        width: '100%',
        maxWidth: '1280px',
        marginTop:'10px',
        display: 'flex',
        flexDirection:'row',
        gap: '25px'
      }}>
        <Indicator title='Diversidade de itens' indicatorValue={differentItems} />
        <Indicator title='Inventario Total' indicatorValue={qtdTotal} />
        <Indicator title='Itens recentes' indicatorValue={recentItems.filter(item => item.isRecent == true).length} />
        <Indicator title='Itens Acabando' indicatorValue={lowQuantityItems.length}/>
   
      </div>
      {/** Ações de itens */}
      <div style={{
        marginTop: '40px',
        width: '100%',
        maxWidth: '1280px',
        display: 'flex',
        flexDirection:'row',
        gap: '25px'
      }}>
        <RecentItems items= {recentItems.filter(item => item.isRecent == true)}/>
        <EndingItems items={lowQuantityItems}/>
        
      </div>
    </>
  )
}

