import React from 'react';
import Chat from './components/Chat';
import BestSellers from './components/Bestsellers'
function App() {
  return (
    <div className='text'>
    <Chat name="Emily Dougrer" label="Developer" image="" message="Hi there. We use Boards to share initial goals and ideas." />
    
    <BestSellers/>
    </div>
  );
}
export default App;
