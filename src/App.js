import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Clock from './component/clock';
import Calculator from './component/calculator';
import Counter from './component/counter';
import Login from './component/login/login';
import Home from './component/home/home';
import Navbar from './component/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
