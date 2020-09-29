import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from 'react-spinners/HashLoader';
import '../../scss/components/loading.scss';

export default () => {
  const location = useLocation();

  const [ loading,setLoading ] = useState(false)

  useEffect(()=>{ 
    if(!loading){
      setLoading(true)
    }else{
      setLoading(false)
      setTimeout(()=> setLoading(true),500)
    }
    setTimeout(()=> setLoading(false),3300)
  },[location.pathname])

  if(loading)
  return (
      <div className="loading">
          <section >
              <h3>Chriss is Thinking...</h3>
              <Loader color="white"/>
          </section>
      </div>
  ) 
  return <></>
}
