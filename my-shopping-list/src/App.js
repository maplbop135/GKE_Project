import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import Recipes from './component/Recipes';
import Mycalendar from './component/Mycalendar';
import Refrigerator from './component/Refrigerator';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/my-calendar' element={<Mycalendar />} />
          <Route path='/refrigerator' element={<Refrigerator />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
