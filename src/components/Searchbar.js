import React, { useContext, useState } from 'react';
import ArrowIcon from '../assets/images/icon-arrow.svg';

export default function Searchbar({setIpAddress}) {



  const [inputIp, setInputIp] = useState('1.1.1.1')
  const handleChange = (e) => {setInputIp(e.target.value)};
  const search = (e) => {
    e.preventDefault();
    setIpAddress(inputIp)
  }
  




  return (
      <form onSubmit={e => search(e)}>
          <input onChange={e => handleChange(e)} type="text" placeholder="Search for any IP address or domain" />
          <button type="submit" role="button">
            <img src={ArrowIcon} alt='arrow-icon' />
          </button>
      </form> 
  )
}