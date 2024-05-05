
// const GenderCheckBox = (onCheckboxChange,selectedGender) => {
//   return (
//     <div className=" flex px-4">
//       <div className="form-control">
//         <label className="label cursor-pointer ">
//           <span className="label-text">Male</span>
//           <input
//             type="checkbox"
//             checked={selectedGender === "male"}
//             onChange={() => onCheckboxChange("male")}
//             className="checkbox checkbox-sm"
//           />
//         </label>
//       </div>
//       <div className="form-control px-4">
//         <label className="label cursor-pointer">
//           <span className="label-text">Female</span>
//           <input
//             type="checkbox"
//             checked={selectedGender === "female"}
//             onChange={() => onCheckboxChange("female")}
//             className="checkbox checkbox-sm  "
//           />
//         </label>
//       </div>
//     </div>
//   );
// }

// export default GenderCheckBox
const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          } `}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer  ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;


