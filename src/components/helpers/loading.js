import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from 'react-spinners/HashLoader';
import '../../scss/components/loading.scss';
import { motion } from 'framer-motion';

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
    setTimeout(()=> setLoading(false),5000)
  },[location.pathname])
  
  const nextVariants = {
      hidden: { 
        y: '-100vh' 
      },
      visible: {
        y: 0,
        transition: { type: 'spring', stiffness: 100 }
      },
    }

  if(loading)
  return (
      <motion.div className="loading"
      variants={nextVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
          <section >
              <h3>Chriss is Thinking...</h3>
              <Loader color="white"/>
          </section>
      </motion.div>
  ) 
  return <></>
}
