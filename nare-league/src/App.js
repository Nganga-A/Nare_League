import Competitions from './components/Competitions';
import AllSports from './components/AllSports';
import Categories from './components/Categories';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
        <Route path="/" element={[<Competitions/>, <AllSports />]} />  
        <Route path="/sports/:sport_name" element={<Categories />} />
    </Routes>
        </div>
        </Router>
      );
}

export default App;
