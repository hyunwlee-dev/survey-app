'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { PropsWithClassName } from '@/app/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '3.표준편차',
    },
  },
};

type ScoresStandardDeviation = {
  team: string | null;
  standardDeviation: number;
};

export default function StandardDeviationChart({
  className,
  scoresStandardDeviation,
}: PropsWithClassName<{
  scoresStandardDeviation: ScoresStandardDeviation[];
}>) {
  const labels = scoresStandardDeviation.map(({ team }) => team);

  const data = {
    labels,
    datasets: [
      {
        label: '표준편차',
        data: scoresStandardDeviation.map(
          ({ standardDeviation }) => standardDeviation,
        ),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar className={className} options={options} data={data} />;
}
