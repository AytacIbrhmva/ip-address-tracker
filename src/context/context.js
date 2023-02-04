import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const IpContext = createContext()

export default function IpContextProvider (props) {



  return (
    <IpContext.Provider value={{}}>
      {props.children}
    </IpContext.Provider>
  )
}
