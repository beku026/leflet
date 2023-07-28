import React from 'react';
import RouteTable from './components/RouteTable';
import MapView from './components/MapView';
import './App.scss'

const App = () => {
  return (
      <div className="app-container">
        <div className="table-container">
          <RouteTable />
        </div>
        <div className="map-container">
          <MapView />
        </div>
      </div>
  );
};

export default App;
