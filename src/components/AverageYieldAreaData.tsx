import React from 'react';
import {  Table } from '@mantine/core';
import { getAverageYieldArea } from '../analytics';
import { loadAgricultureData } from '../data/loadData';

const data = loadAgricultureData();
const averageYieldAreaData = getAverageYieldArea(data);

export const AverageYieldAreaTable: React.FC = () => {
  return (
    <Table style={{ width: '100%', marginTop: '20px' }}>
      <thead style={{ backgroundColor: '#f5f5f5' }}>
        <h1>Average value</h1>
        <tr>
          <th style={{ padding: '10px', textAlign: 'left' }}>Crop</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Average Yield (1950-2020)</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Average Cultivation Area (1950-2020)</th>
        </tr>
      </thead>
      <tbody>
        {averageYieldAreaData.map((row) => (
          <tr key={row.crop} style={{ backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
            <td style={{ padding: '10px', textAlign: 'left' }}>{row.crop}</td>
            <td style={{ padding: '10px', textAlign: 'left' }}>{row.avgYield}</td>
            <td style={{ padding: '10px', textAlign: 'left' }}>{row.avgArea}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
