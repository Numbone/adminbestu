import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/SideBar/SideBar';
import Eticket from './pages/Eticket';
import Gift from './pages/Gift';
import Order from './pages/Order';
import Promocode from './pages/Promocode';
import User from './pages/User';


function App() {
  return (
    <div className="App">

      
          <SideBar/>


        {/* <div className='col-9 content-color'>
          <div className='topbg'></div>
          <Routes>
            <Route key={1} path="/eticket" element={<Eticket />} />
            <Route key={2} path="/gift" element={<Gift />} />
            <Route key={3} path="/order" element={<Order />} />
            <Route key={4} path="/promocode" element={<Promocode />} />
            <Route key={5} path="/user" element={<User />} />
          </Routes>
        </div> */}
      
      {/* </div> */}

    </div>
  );
}

export default App;
