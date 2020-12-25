import React from 'react';
import Loader from 'react-spinners/HashLoader';
import '../../scss/components/loading.scss';

const Parent = () => {

  return ( 
      <div className="loading">
          <section >
              <h3>Chriss is Thinking...</h3>
              <Loader color="white"/>
          </section>
      </div>
  ) 
}

export default Parent;
