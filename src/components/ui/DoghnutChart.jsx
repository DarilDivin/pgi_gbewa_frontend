import { Doughnut } from 'react-chartjs-2';

import { Chart as ChartJS, DoughnutController, ArcElement } from 'chart.js';

ChartJS.register(
    DoughnutController,
    ArcElement
);

const DoghnutChart = () => {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            '#15803d',
            '#22c55e',
            '#86efac'
          ],
          hoverOffset: 4,
          borderRadius: 7,
          borderWidth: 4,
          weight: 2,
          cutout: '80%'
        }]
      };
  return (
    <div className='w-full h-full p-4 flex justify-center items-center'>
        <Doughnut data={data} />
    </div>
  )
}

export default DoghnutChart
