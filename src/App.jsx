import './App.css';
import { Nav, Home, Activities, Contact, About } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <body className='h-screen w-screen flex flex-col'>
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/activities' element={ <Activities />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/about' element={ <About /> } />
      </Routes>
    </body>
  );
}

export default App;
