import React from 'react';
import { VictoryBar, VictoryChart, VictoryPie } from 'victory';

export default function MyCharts() {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ];
  return (
    <div className='chartContainer'>
      <VictoryChart>
          
        <VictoryBar
          width={300}
          domainMargin={10}
          data= {data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
  
      <VictoryPie
        width={300}
        colorScale={['orchid', 'saddlebrown', 'teal', 'orangered']}
        data={data}
        x="quarter"
        y="earnings"
      />

    </div>
  );
}
