import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">

      {/* {Header} */}
      <Header />
      {/* {App Body} */}
      <div className="app__body">
        {/* {Side bar} */}
        <SideBar/>

        {/* {Feed} */}
        <Feed />

        
        {/* {Widget} */}
      </div>
        
    
    
    
    
    </div>
  );
}

export default App;
