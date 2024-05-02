import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          {" "}
          Sign Up <span className="text-rose-500">Chat App</span>
        </h1>
        <form>
          <div className="px-4">
            <label className="label ">
              <span className="text-base label-text">FullName</span>
            </label>
            <input
              type="text"
              placeholder="Enter Fullname"
              className="input input-bordered w-full max-w-xs h-10  "
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
            />
          </div>
          <div className="px-4">
            <label className="label ">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              className="input input-bordered w-full max-w-xs h-10  "
            />
          </div>
          <div className="px-4 ">
            <label className="label ">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter Confirm Password"
              className="input input-bordered w-full max-w-xs h-10  "
            />
          </div>
          <GenderCheckBox/>
         
          <div className=" px-4">
            <a className="link link-secondary text-sm hover:underline text-rose-400 hover:text-rose-500 mt-2 inline-block">
              Already have  an account ?
            </a>
          </div>
          <div className="px-4 py-2">
            <button
              className="btn btn-block btn-sm mt-2  text-rose-400"
              type="submit"
            >
              Login Now !
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp