import React from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';

defaults.global.legend.display = false;

const Doughnuts = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['#DB4453', '#F2802D', '#36BC9B', '#5D9CEC', '#8C63E3', '#5C5C5C'],
        borderWidth: 2,
      },
    ],
  };
  return <Doughnut data={data} height={100} width={100} options={{ maintainAspectRatio: false }} />;
};
export default Doughnuts;
