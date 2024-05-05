import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const {loading,login}=useLogin()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(username,password);
    await login(username,password);
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-500">
        <h1 className="text-center text-3xl font-semibold text-gray-300 mt-2">
          Login <span className="text-rose-400">Chat App</span>
        </h1>
        <form className="m-2 p-2" onSubmit={handleSubmit}>
          <div className="px-4 py-2">
            <label className="label ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full max-w-xs h-10  "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="px-4 py-2">
            <label className="label ">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full max-w-xs h-10 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className=" px-4">
            <Link
              to={"/signup"}
              className="link link-secondary text-sm hover:underline text-rose-400 hover:text-rose-500 mt-2 inline-block"
            >
              forgot password
            </Link>
          </div>
          <div className="px-4 py-2">
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login Now!"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

