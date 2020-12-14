import React from 'react';
import Tweet from "./Tweet";

function App() {
  return (
    <div className="app">
     
     <Tweet name='Dev ED' message='New episodes coming soon' like='1987' />
     <Tweet name='John Snow' message='Winter is Coming' like='64789' />
     <Tweet name='Manish' message='Chatpate in the Pasal' like='5' />
     <Tweet name='Pradeep' message='I hate Jesus Crist. I have those thoughts because I might not
     have enough information on him' like='99' />
    </div>
  );
}

export default App;