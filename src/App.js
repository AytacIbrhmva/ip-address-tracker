import { useContext, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import Main from './components/Main';
import Map from './components/Map';

import { useSelector} from "react-redux";



function App() {

  const ip = useSelector(state => state.ip.value)

  const [address, setAddress] = useState(null);

  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=${ip}`)
    .then(res => setAddress(res.data))
    .catch((err) => console.log('xeta'))

  }, [ip]);

  return (
    <div className="App">
      <div className="header">
        <div className="container">  
          <h2 className="title">IP Address Tracker</h2>
          <Searchbar/>
          {address == null ? 'Loading...' : <Main address={address}/>}
        </div>
      </div>
      {address == null ? 'Loading...' : <Map address={address}/>}
    </div>
  );
}

export default App;
