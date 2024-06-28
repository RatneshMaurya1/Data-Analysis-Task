# Agriculture Analytics

This project performs analytics over the Indian Agriculture dataset and displays the results as tables using Mantine v7.

## Prerequisites

- Node.js 
- Yarn

## Installation

1. Clone the repository:

   git clone https://github.com/your-username/agriculture-analytics.git
   cd agriculture-analytics

2. Install dependencies using Yarn:
   yarn install

3. Start the development server:
   yarn start
   
Open your browser and navigate to http://localhost:3000 to see the application.

Building the Project

4. To build the project for production, run:
   yarn build


Project Structure
src/ - Contains the source code
components/ - Contains the React components
MaxMinProductionTable.tsx - Component for displaying the max and min production table
AverageYieldAreaTable.tsx - Component for displaying the average yield and area table
data/ - Contains the data processing logic
dataSet.json - Contains static files and the dataset (dataSet.json)
loadData.ts - Script to load and preprocess the data
analytics/ - Contains the analytics functions
index.ts - Analytics functions for processing the data
