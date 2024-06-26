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
      text: '1. 총합',
    },
  },
};

type ScoresSum = { team: string | null; sum: number };

export default function SumChart({
  className,
  scoresSum,
}: PropsWithClassName<{
  scoresSum: ScoresSum[];
}>) {
  const labels = scoresSum.map(({ team }) => team);
  const data = {
    labels,
    datasets: [
      {
        label: 'sum',
        data: scoresSum.map(({ sum }: { sum: number }) => sum),
        backgroundColor: '#44CFBB',
      },
    ],
  };

  return <Bar className={className} options={options} data={data} />;
}
