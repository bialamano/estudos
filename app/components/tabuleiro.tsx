export default function Tabuleiro(props: any) {
  const quantity = props.numero

  return (
    <div className='tabuleiroWrapper'>
      {Array.from(Array(quantity).keys()).map((i: number) => (
        <div key={i} className={`${i % 2 === 1 ? "reverse" : "normal"}`}>
          {Array.from(Array(quantity).keys()).map((i: number) => (
            <div key={i} className={`${i % 2 === 1 ? "isEven" : "isOdd"}`} />
          ))}
        </div>
      ))}
    </div>
  )
}
