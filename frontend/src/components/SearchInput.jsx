// // import { CiSearch } from "react-icons/ci";
// const SearchInput = () => {
//   return (
//     <div className="m-4 p-2 border-b border-gray-400 border-b-gray-200">
//       <form className=" flex items-center ">
//         <label className="input input-bordered  flex items-center gap-2">
//           <input type="text" className="grow" placeholder="Search" />
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="w-4 h-4 opacity-70"
//           >
//             <path
//               fillRule="evenodd"
//               d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </label>
//         <button className="bg-slate-500 px-4 py-2 rounded-lg">
//           <i className="material-icons">search</i>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SearchInput;


import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
			<button type='submit' className='btn btn-circle bg-rose-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;
