import React from 'react'
import "../src/App.css";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <div>
      <div className="absolute left-3 top-3 text-2xl font-bold text-white">Chat.io</div>

      {/* <Dashboard /> */}
      <Register />
      {/* <Login /> */}

      <ToastContainer theme='colored' autoClose={2000} />
    </div>
  )
}

export default App