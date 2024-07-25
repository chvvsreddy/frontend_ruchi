import {useContext } from "react";
import { Outlet } from "react-router-dom" ;
import {ToastContainer} from "react-toastify";
import 'react-toastify/ReactToastify.css';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { GlobalContext } from '../layouts/LoginState';

function MainLayout() {
  const {loginState} = useContext(GlobalContext);

  return (
    <>
    <section className="main-layout">
            <Navbar/>
        <div className="bg-slate-100 grid grid-cols-9 gap-4 mx-auto  h-full">       
        {
          loginState === false ? null : <div className="col-span-2 bg-blue-900 "> <Sidebar/></div>
        }              
      
      <div className="col-span-7 min-h-full bg-slate-100">        
      <Outlet/>
      <ToastContainer/>
      </div>
    </div>
        </section>
  
    </>
  )
}

export default MainLayout