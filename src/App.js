import { useContext, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import {IpContext} from './context/context';
import Main from './components/Main';
import Map from './components/Map';


function App() {

  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ipAddress}`);
        const data = await res.json();
        setAddress(data);
      };
      getData();
    } catch (error) {}
  }, [ipAddress]);

  return (
    <div className="App">
      <div className="header">
        <div className="container">  
          <h2 className="title">IP Address Tracker</h2>
          <Searchbar setIpAddress={setIpAddress} />
          {address == null ? 'Loading...' : <Main address={address}/>}
        </div>
      </div>
      {address == null ? 'Loading...' : <Map address={address}/>}
    </div>
  );
}

export default App;
