import Competitions from './components/Competitions';
import AllSports from './components/AllSports';
import Categories from './components/Categories';
import Cat_Competitions from './components/Cat_Competitions'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="min-h-screen dark:bg-gray-600 container">
        < Navbar/>
          <div className="pt-16">
            <Routes>
                <Route path="/" element={[<Competitions/>, <AllSports />]} />  
                <Route path="/sports/:sport_name" element={<Categories />} />
                <Route path="/categories/:category_name" element={<Cat_Competitions/>} />
            </Routes>
          </div>
      </div>
    </Router>
    
      );
}

export default App;
