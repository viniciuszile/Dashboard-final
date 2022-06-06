import "../grafico_bitcoin/bitcoin_style.css";
import LineChart from "../../Tipo_graficos/LineChart";
import React,{useState } from 'react'
import api_bitcoin from '../../../Apis/Bitcoin'


function Bitcoin() {

  const [bitcoin1,setBitcoin] = useState ([])
  
  api_bitcoin.get('7').then( ({data}) => {
    setBitcoin(data)
    // console.log(data)
  })


  const userData = ({ labels: bitcoin1.slice(0).map(z => new Date(z.timestamp*1000).toLocaleDateString("pt-BR")),
    datasets: [{
      label: "Valor do Bitcoin comparado ao real",
        data: bitcoin1.map((data) => data.high),
      backgroundColor: [
        "red",
        "pink",
        "orange",
        "yelow",
        "purple",
      ],
      borderColor: "white",
      borderWidth: 1,
    },
  ],
});

  return (
    <div className="bitcoin ">
    <LineChart chartData={userData} /> 
    <br/>
    <div class="tooltip-dolar">
    <h5 className="texto-dolar">Mais Informações</h5>
        <span class="tooltiptext-dolar">O dólar dos Estados Unidos, também conhecido como dólar estadunidense ou dólar americano é a moeda oficial dos Estados Unidos
         e utilizada no mundo inteiro, tanto em reservas internacionais, como em livre circulação em alguns países. 
         Atualmente, sua expedição é controlada pela Reserva Federal dos Estados Unidos</span>
      </div>
    </div>
  );
}

export default Bitcoin;