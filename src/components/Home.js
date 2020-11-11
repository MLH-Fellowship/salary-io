import React from 'react';

import Form from './Form';


function Home() {
  console.log('lol');
  return (
    <>
      <div>
        <div style={{fontFamily: "sans-serif", fontSize: 50}}>
        salary.io
        </div>
          <div style={{textAlign: 'center', paddingTop: 100}}>
            <Form />
          </div>
      </div>
    </>
  );

}

export default Home;
