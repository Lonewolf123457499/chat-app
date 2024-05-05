import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

 const [inputs, setInputs]=useState({
  fullName:"",
  username:"",
  password:"",
  confirmPassword:"",
  gender:""
 })
const { loading,signup } = useSignup();

const handleCheckboxChange = (gender) => {
  setInputs({ ...inputs, gender });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  await signup(inputs);
};
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-rose-500">Chat App</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="px-4">
            <label className="label ">
              <span className="text-base label-text">FullName</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="input input-bordered w-full max-w-xs h-10  "
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div className="px-4 ">
            <label className="label ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full max-w-xs h-10  "
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div className="px-4">
            <label className="label ">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs h-10  "
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div className="px-4 ">
            <label className="label ">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Confirm Password"
              className="input input-bordered w-full max-w-xs h-10  "
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <div className=" px-4">
            <Link
              to={"/login"}
              className="link link-secondary text-sm hover:underline text-rose-400 hover:text-rose-500 mt-2 inline-block"
            >
              Already have an account ?
            </Link>
          </div>
          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp