interface IndicatorProps {
  title: string
  indicatorValue: number
}
export function Indicator (props:IndicatorProps) {
  return (
    <div style={{
      backgroundColor:'#121212',
      width: '400px',
      padding:'15px 30px'
    }}>
      <h4 style={{
        marginBottom:'20px'
      }}>{props.title}</h4>
      <h2 style={{
        fontSize: '40px',
        fontWeight: '400',
        textAlign:'center',
        marginBottom:'20px'
      }}>{props.indicatorValue}</h2>
     </div>
  )
}