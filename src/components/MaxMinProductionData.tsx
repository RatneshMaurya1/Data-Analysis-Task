import React from 'react';
import { Table } from '@mantine/core';
import { getMaxMinProduction } from '../analytics';
import { loadAgricultureData } from '../data/loadData';

const data = loadAgricultureData();
const maxMinProductionData = getMaxMinProduction(data);

export const MaxMinProductionTable: React.FC = () => {
  return (
    <Table style={{ width: '100%', marginTop: '20px' }}>
      <thead style={{ backgroundColor: '#f5f5f5' }}>
        <tr>
          <th style={{ padding: '10px', textAlign: 'left' }}>Year</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Crop with Maximum Production</th>
          <th style={{ padding: '10px', textAlign: 'left' }}>Crop with Minimum Production</th>
        </tr>
      </thead>
      <tbody>
        {maxMinProductionData.map((row) => (
          <tr key={row.year} style={{ backgroundColor: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <td style={{ padding: '10px', textAlign: 'left' }}>{row.year}</td>
            <td style={{ padding: '10px', textAlign: 'left' }}>{row.maxCrop}</td>
            <td style={{ padding: '10px', textAlign: 'left' }}>{row.minCrop}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
