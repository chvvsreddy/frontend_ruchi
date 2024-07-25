import React, { useState } from "react";
import { API_URL } from "../../helpers/ApiPath";
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
      e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/vendor/register`,{
        method :'POST',
        headers : {
          'content-Type':'application/json'
        },
        body : JSON.stringify({username,email, password})
    }) 
    const data = await response.json();
    if(response.ok){
      setUsername("")
      setEmail("")
      setPassword("")
      alert("Vendor registered Success")
      navigate('/login', { replace: true });
    }
    } catch (error) {
      console.error('registration failed',error)
      alert("registration failed")
    }
  };

  return (
    <>
      <div className="w-6/12 p-6">
        <div className="border border-gray-900/10 p-12 bg-white rounded-xl">
          <h2 className="text-base font-bold leading-7 text-gray-900 mb-7">
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900" > Username </label>
              <div className="mt-2">
                <input 
                  name="username"
                  type="text"
                  value={username} autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Username"
                  className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Email{" "}
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Password
              </label>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>

            <button type="submit" className="rounded-md bg-indigo-600 p-3 font-semibold text-white hover:bg-indigo-500  focus-visible:outline-indigo-600 w-full">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
