import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const globalContext = createContext();



const GlobalProvider = ({children}) => {

const [allApi, setAllApi] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const getApi = async () => {
      try {
        await axios
          .get("https://fakestoreapi.com/products")
          .then((res) => setAllApi(res.data));
          setLoading(false)
      } catch (err) {
        console.log(err);
        setLoading(true)
      }
    };
    getApi()
  }, []);

const data = {
    allApi,
    setAllApi,
    loading,
}

return (
    <globalContext.Provider value={data}>
      {children}
    </globalContext.Provider>
  );
  
  
}

export default GlobalProvider
