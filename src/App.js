import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Eticket from './pages/Eticket';
import Gift from './pages/Gift';
import Order from './pages/Order';
import Promocode from './pages/Promocode';
import User from './pages/User';


function App() {
  return (
    <div className="App">

      <div className='row'>
        <div className='col-3'>
          <Navbar />
        </div>

        <div className='col-9 content-color'>
          <Routes>
            <Route key={1} path="/eticket" element={<Eticket />} />
            <Route key={2} path="/gift" element={<Gift />} />
            <Route key={3} path="/order" element={<Order />} />
            <Route key={4} path="/promocode" element={<Promocode />} />
            <Route key={5} path="/user" element={<User />} />
          </Routes>
        </div>
      </div>
      {/* </div> */}

    </div>
  );
}

export default App;
