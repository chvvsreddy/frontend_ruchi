import React, { useState,useContext } from 'react'
import { API_URL } from '../../helpers/ApiPath';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../layouts/LoginState';

const Login = () => {
  const {loginState, setLoginState} = useContext(GlobalContext);
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //const [loading, setLoading]   = useState();
 
  const loginHandler = async (e)=>{
    e.preventDefault();
    try{
        const response = await fetch(`${API_URL}/vendor/login`, {
        method:'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email, password})
       })

       const data = await response.json();
       if(response.ok){
          
          alert("Vendor Login Success")
          localStorage.setItem('loginToken', data.token)          
          navigate('/',{replace:true});
          setLoginState(true);
        }
         const vendorId = data.vendorId
          console.log("checking for VendorId:",vendorId)
         const vendorResponse = await fetch(`${API_URL}/vendor/single-vendor/${vendorId}`)
         const vendorData = await vendorResponse.json();
         if(vendorResponse.ok){
          
        const vendorFirmId = vendorData.vendorFirmId;
       //const vendorFirmName = vendorData.vendor.firm[0].firmName;
        //console.log("my firm name is", vendorFirmName)
         localStorage.setItem('firmId', vendorFirmId);
        //     localStorage.setItem('firmName', vendorFirmName)
        }

    }catch(error){
      console.error("",error)
      alert("Login Failed")
    }

  }


  return (
    <>
    <div className="w-6/12 p-6">
        <div className="border border-gray-900/10 p-12 bg-white rounded-xl">
          <h2 className="text-base font-bold leading-7 text-gray-900 mb-7">Login</h2>
     <form onSubmit={loginHandler}>
     <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900"> Email</label>
        <div className="mt-2">
        <input name="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Email' className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"/>
        </div>
    </div>
    <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900"> Password</label>
        <div className="mt-2">
        <input name="password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter Password' className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600" />
        </div>
    </div>
    <button type="submit" className="rounded-md bg-indigo-600 p-3 font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full" >Login </button>
     </form>
     </div>
     </div>
     

    </>
  )
}

export default Login