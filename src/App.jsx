import { useState } from 'react'
import baralhoCartas from './assets/baralho-cartas.png'
import carta1 from './assets/carts/1.png'
import carta2 from './assets/carts/2.png'
import carta3 from './assets/carts/3.png'
import carta4 from './assets/carts/4.png'
import carta5 from './assets/carts/5.png'
import carta6 from './assets/carts/6.png'
import carta7 from './assets/carts/7.png'
import carta8 from './assets/carts/8.png'
import carta9 from './assets/carts/9.png'
import carta10 from './assets/carts/10.png'
import carta11 from './assets/carts/11.png'
import carta12 from './assets/carts/12.png'
import carta13 from './assets/carts/13.png'

const App = () => {
  const [virarCarta, setVirarCarta] = useState("verso");
  const [imgCard, setImgCard] = useState(baralhoCartas)
  const [cartas] = useState([
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10,
    carta11,
    carta12,
    carta13,

  ])

  const sortearCarta = () => {
    if(virarCarta === "verso") {
      setVirarCarta("frente")

      const resultado = Math.floor(Math.random()*(cartas.length))

      setImgCard(cartas[resultado]);
    }else{

      setVirarCarta("verso")
      setImgCard(baralhoCartas);
    }
  }

  return (
    <>
      <h1>Virar a Carta - {virarCarta}</h1>
      <div>
        <img 
          src={imgCard}
          onClick={sortearCarta}
          />
      </div>
    </>
  )
}

export default App
