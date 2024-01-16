import React from 'react';
import { Nav, Home, Activities, Members, Contact, About } from './components';
import Contest from './components/Acti/Contest';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='xms:h-full w-full md:h-full flex flex-col'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/members' element={<Members />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/activities/:id' element={<Contest />} />
      </Routes>
    </div>
  );
}

export default App;
