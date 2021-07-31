import React from 'react';

import { SynapsoftFront, SynapsoftBack } from 'namecards';
import 'namecards/dist/index.css';

const App = () => {
  return (
    <>
      <h2>synapsoft</h2>
      <SynapsoftFront
        className='card'
        name='최종찬'
        designation='사원'
        department='웹오피스팀'
        mobile='010-6351-6406'
        email='jongchan@synapsoft.co.kr'
      />
      <SynapsoftBack className='card' />
    </>
  );
};

export default App;
