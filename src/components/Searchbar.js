import React, { useContext, useState } from 'react';
import ArrowIcon from '../assets/images/icon-arrow.svg';
import { useSelector, useDispatch } from "react-redux";
import { setIpBySearch } from '../store/features/ipAddressSlice';

export default function Searchbar() {

  const dispatch = useDispatch()

  const [inputIp, setInputIp] = useState('1.1.1.1')
  const handleChange = (e) => {setInputIp(e.target.value)};
  const search = (e) => {
    e.preventDefault();
    dispatch(setIpBySearch(inputIp))
  }
  




  return (
      <form onSubmit={e => search(e)}>
          <input onChange={e => handleChange(e)} type="text" placeholder="Search for any IP address or domain" />
          <button type="submit" id="searchButton">
            <img src={ArrowIcon} alt='arrow icon' />
          </button>
      </form> 
  )
}