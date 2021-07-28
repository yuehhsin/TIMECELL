import React from 'react';
import { Bar } from 'react-chartjs-2';

const Barchart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Hours',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['#DB4453', '#F2802D', '#36BC9B', '#5D9CEC', '#8C63E3', '#5C5C5C'],
      },
    ],
  };
  return <Bar height={100} width={100} options={{ maintainAspectRatio: false }} data={data} />;
};
export default Barchart;
