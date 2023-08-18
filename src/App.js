import './App.css';
import{BrowserRouter as Router, Routes, Route} from  'react-router-dom';
import {Navbar} from './components/navbar.jsx';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import {} from './components/navbar.css'
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
     </Router>
    </div>
  );
}
export default App;
