import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./comps/Navbar";

function App() {
  return (  
    <div>
      <Navbar />
      <Outlet />

      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
}

export default App;