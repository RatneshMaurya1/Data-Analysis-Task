import React from 'react';
import { MantineProvider } from '@mantine/core';
import { MaxMinProductionTable } from './components/MaxMinProductionData';
import { AverageYieldAreaTable } from './components/AverageYieldAreaData';


const App: React.FC = () => {
  return (
    <MantineProvider theme={{}}>
      <div>
        <h1>Agriculture Analytics</h1>
        <MaxMinProductionTable />
        <AverageYieldAreaTable />
      </div>
    </MantineProvider>
  );
};

export default App;