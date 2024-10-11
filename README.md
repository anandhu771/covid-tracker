# COVID-19 Dashboard Application

This is a COVID-19 dashboard application that visualizes the current COVID statistics in India. The app displays key metrics such as total cases, active cases, recoveries, and deaths for each state. It includes data filtering, visualizations using charts, and an interactive map.

## Features

- **State-based Filtering**: Filter COVID data by selecting a specific state.
- **Line Chart**: Visual representation of total cases, active cases, recoveries, and deaths over all states or filtered by a single state.
- **Pie Chart**: Displays the proportion of active, recovered, and deceased cases for a selected state.
- **Map View**: An interactive map with markers for each state showing its COVID statistics.
  
## Tech Stack

- **Frontend**: React.js with Vite build tool.
- **State Management**: Redux for global state management.
- **Charts**: Plotly for line and pie chart visualizations.
- **Maps**: Leaflet for displaying the map with state markers.
  
## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later) 

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/covid-dashboard.git

2. **Navigate to the project directory**:

    ```bash
    cd covid-tracker

3. **Install dependencies**

    ```bash
    npm install

4. **Running the Application**

    ```bash
    npm run dev

This will start the Vite development server. The app will be available at http://localhost:5173
