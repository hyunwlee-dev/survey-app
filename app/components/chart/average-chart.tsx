'use client';

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { PropsWithClassName } from '@/app/types';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '2. 평균',
    },
  },
};

type ScoresAverage = { team: string | null; average: number };

export default function AverageChart({
  className,
  scoresAverage,
}: PropsWithClassName<{
  scoresAverage: ScoresAverage[];
}>) {
  const labels = scoresAverage.map(({ team }) => team);
  const data = {
    labels,
    datasets: [
      {
        label: 'average',
        data: scoresAverage.map(({ average }) => average),
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(201, 203, 207, 0.5)',
          'rgba(102, 255, 102, 0.5)',
          'rgba(255, 102, 255, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <PolarArea className={className} options={options} data={data} />;
}
