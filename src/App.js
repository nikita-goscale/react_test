import React, {Component} from 'react';
import './App.css';
import DataListing from './components/dataListing';
import 'bootstrap/dist/css/bootstrap.css'
import AppRoutes from './AppRoutes';

class App extends Component {
  render() { 
    return (
    <div className="App">
      <AppRoutes/>
      <DataListing/>
    </div>
    );
  }
}

export default App;
