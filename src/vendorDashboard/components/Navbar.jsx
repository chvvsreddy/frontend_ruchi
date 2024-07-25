import React,{ useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../layouts/LoginState';
//import { useNavigate } from 'react-router-dom';


const Navbar = () => { 
  //let navigate = useNavigate();
  const {loginState, setLoginState} = useContext(GlobalContext);

  const LogOutHandler = (e)=>{
    confirm("Are you sure to logout?")
    localStorage.removeItem("loginToken")
   localStorage.removeItem('firmId')
   setLoginState(false);
    //navigate('/register');
  }
  return (
    
    <>
    <div className="bg-white drop-shadow-md">
    <header className="max-w-screen-2xl mx-auto">
    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
            <a href="#" className="font-bold text-blue-950 text-4xl">
           Ruchi              
            </a>
        </div>
        
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            { loginState === false ? (
              <>
              <NavLink to="/login" className="text-sm font-semibold leading-6 text-gray-900 mx-4">
          Log in <span aria-hidden="true">&rarr;</span>
        </NavLink>
        <NavLink to="/register" className="text-sm font-semibold leading-6 text-gray-900 mx-4">
          Register <span aria-hidden="true">&rarr;</span>
        </NavLink>
        </> )                
              :(<NavLink onClick={LogOutHandler} className="text-sm font-semibold leading-6 text-gray-900 mx-4">
                Logout <span aria-hidden="true">&rarr;</span>
               </NavLink>)
                
            
            }
            
            
          </div>
       
    </nav>
    </header>
    </div>
    </>
  )
}

export default Navbar