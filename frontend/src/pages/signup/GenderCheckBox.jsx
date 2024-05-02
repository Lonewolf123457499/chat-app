
const GenderCheckBox = () => {
  return (
    <div className=" flex px-4">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-sm"
          />
        </label>
      </div>
      <div className="form-control px-4">
        <label className="label cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-sm  "
          />
        </label>
      </div>
    </div>
  );
}

export default GenderCheckBox