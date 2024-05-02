const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-500">
        <h1 className="text-center text-3xl font-semibold text-gray-300 mt-2">
          Login <span className="text-rose-400">Chat App</span>
        </h1>
        <form className="m-2 p-2">
          <div className="px-4 py-2">
            <label className="label ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full max-w-xs h-10  "
            />
          </div>
          <div className="px-4 py-2">
            <label className="label ">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="input input-bordered w-full max-w-xs h-10 "
            />
          </div>
          <div className=" px-4">
            <a className="link link-secondary text-sm hover:underline text-rose-400 hover:text-rose-500 mt-2 inline-block">forgot password</a>
          </div>
          <div className="px-4 py-2">
            <button className="btn btn-block btn-sm mt-2  text-rose-400" type="submit">Login Now !</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;