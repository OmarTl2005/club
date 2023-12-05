import './App.css';
import { Nav, Home, Activities, Contact, About } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <body className='xms:h-full w-full md:h-full flex flex-col'>
      <Nav />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path='/activities' element={ <Activities />} />
        <Route exact path='/contact' element={ <Contact />} />
        <Route exact path='/about' element={ <About /> } />
      </Routes>
    </body>
  );
}

export default App;
